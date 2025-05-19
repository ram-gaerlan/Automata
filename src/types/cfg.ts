export interface CFGProduction {
  from: string;
  to: string[];
}

export interface CFG {
  variables: string[];
  terminals: string[];
  productions: CFGProduction[];
  startSymbol: string;
} 