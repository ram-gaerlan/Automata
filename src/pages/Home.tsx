import React, { useState } from 'react';
import RegexDisplay from '../components/RegexDisplay';
import AutomataTable from '../components/AutomataTable';
import StringValidator from '../components/StringValidator';
import { DFA_1, DFA_2, CFG_1, CFG_2, PDA_1, PDA_2 } from '../utils/automata';

const Home = () => {
  const [selectedRegex, setSelectedRegex] = useState<number>(0);
  const regex1 = "(a+b)* (aa+bb) (aa+bb)* (ab+ba+aba) (bab+aba+bbb) (a+b+bb+aa)* (bb+aa+aba) (aaa+bab+bba) (aaa+bab+bba)*";
  const regex2 = "(1+0)* (11+00+101+010) (11+00)* (1+0+11+00) (1+0+11) (11+00)* (101+000+111) (1+0)* (101+000+111+001+100) (11+00+1+0)*";

  return (
    <div className="space-y-8">
      <section className="bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Regular Expressions</h2>
        <div className="grid grid-cols-1 gap-6">
          <RegexDisplay title="Regex 1" regex={regex1} />
          <RegexDisplay title="Regex 2" regex={regex2} />
        </div>
      </section>

      <AutomataTable
        dfas={[DFA_1, DFA_2]}
        cfgs={[CFG_1, CFG_2]}
        pdas={[PDA_1, PDA_2]}
        selectedRegex={selectedRegex}
        onRegexChange={setSelectedRegex}
      />

      <StringValidator dfa={selectedRegex === 0 ? DFA_1 : DFA_2} />
    </div>
  );
};

export default Home;