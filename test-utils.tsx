import '@testing-library/jest-dom';

import { configure, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

const t = (key: string) => key;

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: t,
    i18n: {
      language: 'az',
      exists: jest.fn()
    }
  }),
  initReactI18next: { type: '3rdParty', init: jest.fn() },
  Trans: ({ children }) => (Array.isArray(children) ? children : [children]) // this line was missing (() => jest.fn() might also work)
}));

jest.useFakeTimers();
// jest.spyOn(global, 'setTimeout');
// jest.spyOn(global, 'setInterval');

configure({ testIdAttribute: 'data-test-id' });
type InitialEntry = string | Partial<Location>;

export const renderWithRouter = (ui: React.ReactElement, initialEntries: InitialEntry[] = ['/']) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
    history
  };
};

// re-export everything
export * from '@testing-library/react';
export { renderWithRouter as render };

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any)
}));

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useNavigate = jest.spyOn(require('react-router-dom'), 'useNavigate');

export const mockUseNavigate = (navigateFunc: () => void) => {
  useNavigate.mockImplementation(() => navigateFunc);
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSearchParams = jest.spyOn(require('react-router-dom'), 'useSearchParams');

export const mockUseSearchParams = (searchParams, setSearchParams) => {
  useSearchParams.mockImplementation(() => [searchParams, setSearchParams]);
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useLocation = jest.spyOn(require('react-router-dom'), 'useLocation');

export const mockUseLocation = (location: Record<string, unknown>) => {
  useLocation.mockImplementation(() => ({ ...location }));
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useParams = jest.spyOn(require('react-router-dom'), 'useParams');

export const mockUseParams = (object: Record<string, string>) => {
  useParams.mockImplementation(() => ({ ...object }));
};
