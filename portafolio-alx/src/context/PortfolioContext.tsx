import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { programmers as seedProgrammers } from '../data/programmers';
import { AdvisoryRequest, PortfolioProject, ProgrammerProfile, Role } from '../types';

interface PortfolioContextValue {
  role: Role;
  setRole: (role: Role) => void;
  programmers: ProgrammerProfile[];
  advisories: AdvisoryRequest[];
  addProgrammer: (payload: Omit<ProgrammerProfile, 'id' | 'projects'> & { id?: string; projects?: PortfolioProject[] }) => ProgrammerProfile;
  addProject: (programmerId: string, project: PortfolioProject) => void;
  createAdvisory: (payload: Omit<AdvisoryRequest, 'id' | 'status' | 'resolutionNote' | 'programmerName'>) => AdvisoryRequest;
  updateAdvisoryStatus: (id: string, status: AdvisoryRequest['status'], note?: string) => void;
}

const PortfolioContext = createContext<PortfolioContextValue | undefined>(undefined);

const generateId = (prefix: string) => `${prefix}-${Math.random().toString(36).slice(2, 8)}`;

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<Role>('Administrador');
  const [programmers, setProgrammers] = useState<ProgrammerProfile[]>(seedProgrammers);
  const [advisories, setAdvisories] = useState<AdvisoryRequest[]>([]);

  const addProgrammer: PortfolioContextValue['addProgrammer'] = useCallback((payload) => {
    const newProgrammer: ProgrammerProfile = {
      id: payload.id ?? generateId('dev'),
      projects: payload.projects ?? [],
      ...payload
    };

    setProgrammers((prev) => [newProgrammer, ...prev]);
    return newProgrammer;
  }, []);

  const addProject: PortfolioContextValue['addProject'] = useCallback((programmerId, project) => {
    setProgrammers((prev) =>
      prev.map((prog) =>
        prog.id === programmerId
          ? {
              ...prog,
              projects: [{ ...project, id: project.id ?? generateId('proj') }, ...prog.projects]
            }
          : prog
      )
    );
  }, []);

  const createAdvisory: PortfolioContextValue['createAdvisory'] = useCallback(
    (payload) => {
      const programmerName = programmers.find((p) => p.id === payload.programmerId)?.name ?? 'Programador';
      const advisory: AdvisoryRequest = {
        id: generateId('adv'),
        status: 'Pendiente',
        resolutionNote: undefined,
        programmerName,
        ...payload
      };

      setAdvisories((prev) => [advisory, ...prev]);
      return advisory;
    },
    [programmers]
  );

  const updateAdvisoryStatus: PortfolioContextValue['updateAdvisoryStatus'] = useCallback((id, status, note) => {
    setAdvisories((prev) =>
      prev.map((request) =>
        request.id === id
          ? {
              ...request,
              status,
              resolutionNote:
                note ??
                (status === 'Aprobada'
                  ? 'Solicitud confirmada, se comparte link de reunión.'
                  : 'Solicitud rechazada por conflicto de agenda.')
            }
          : request
      )
    );
  }, []);

  const value = useMemo(
    () => ({ role, setRole, programmers, advisories, addProgrammer, addProject, createAdvisory, updateAdvisoryStatus }),
    [role, programmers, advisories, addProgrammer, addProject, createAdvisory, updateAdvisoryStatus]
  );

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error('usePortfolio debe usarse dentro de PortfolioProvider');
  return context;
};
