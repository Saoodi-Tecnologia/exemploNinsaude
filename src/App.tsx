import React, { useState } from 'react';
import { 
  Pause, Edit2, Phone, FileText, Printer, Folder, LineChart, Plus, 
  ChevronDown, ChevronUp, Filter, User, Stethoscope, Calendar, Activity, FileDigit, X, MoreHorizontal, Search
} from 'lucide-react';

// Mock Data
const MOCK_EXAMS = [
  {
    id: 11,
    doctor: 'Roberto Almeida',
    specialty: 'Dermatologia',
    date: '2026-04-11',
    time: '08:00',
    name: '25 OH VITAMINA D',
    hasResult: false,
    result: ''
  },
  {
    id: 12,
    doctor: 'Roberto Almeida',
    specialty: 'Dermatologia',
    date: '2026-04-11',
    time: '08:00',
    name: 'ZINCO SÉRICO',
    hasResult: false,
    result: ''
  },
  {
    id: 1,
    doctor: 'João Silva',
    specialty: 'Clínico Geral',
    date: '2026-04-10',
    time: '14:30',
    name: 'HEMOGRAMA COMPLETO',
    hasResult: true,
    resultType: 'text',
    result: 'Hemácias: 4.5 milhões/mm³\nHemoglobina: 13.5 g/dL\nLeucócitos: 6.500/mm³\nPlaquetas: 250.000/mm³',
  },
  {
    id: 2,
    doctor: 'João Silva',
    specialty: 'Clínico Geral',
    date: '2026-04-10',
    time: '14:30',
    name: 'COLESTEROL TOTAL E FRAÇÕES',
    hasResult: true,
    resultType: 'text',
    result: 'Colesterol Total: 180 mg/dL\nHDL: 50 mg/dL\nLDL: 100 mg/dL\nVLDL: 30 mg/dL\n\nConclusão: Exames dentro dos padrões de normalidade.',
  },
  {
    id: 3,
    doctor: 'Maria Souza',
    specialty: 'Cardiologia',
    date: '2026-03-15',
    time: '11:00',
    name: 'ECOCARDIOGRAMA COM DOPPLER COLORIDO - AVALIACAO PRE-OPERATORIA IMPLANTE PROTESE JOELHO',
    hasResult: true,
    resultType: 'image',
    resultLink: '#',
    result: '',
  },
  {
    id: 4,
    doctor: 'Maria Souza',
    specialty: 'Cardiologia',
    date: '2026-03-15',
    time: '11:00',
    name: 'MONITORIZAÇÃO AMBULATORIAL DA PRESSÃO ARTERIAL (MAPA) - 24 HORAS - AVALIACAO PRE-OPERATORIA',
    hasResult: false,
    result: '',
  },
  {
    id: 5,
    doctor: 'Maria Souza',
    specialty: 'Cardiologia',
    date: '2026-03-15',
    time: '11:00',
    name: 'HOLTER DE 24 HORAS 3 CANAIS - AVALIACAO PRE-OPERATORIA IMPLANTE PROTESE JOELHO',
    hasResult: false,
    result: '',
  },
  {
    id: 13,
    doctor: 'Fernanda Lima',
    specialty: 'Ginecologia',
    date: '2026-03-01',
    time: '10:30',
    name: 'ULTRASSONOGRAFIA PÉLVICA',
    hasResult: false,
    result: ''
  },
  {
    id: 6,
    doctor: 'Carlos Mendes',
    specialty: 'Ortopedia',
    date: '2026-02-20',
    time: '09:15',
    name: 'RESSONÂNCIA MAGNÉTICA DO JOELHO DIREITO',
    hasResult: true,
    resultType: 'image',
    resultLink: '#',
    result: '',
  },
  {
    id: 7,
    doctor: 'Carlos Mendes',
    specialty: 'Ortopedia',
    date: '2026-02-20',
    time: '09:15',
    name: 'RAIO-X DO JOELHO DIREITO',
    hasResult: true,
    resultType: 'image',
    resultLink: '#',
    result: '',
  },
  {
    id: 8,
    doctor: 'Ana Costa',
    specialty: 'Endocrinologia',
    date: '2026-01-10',
    time: '16:45',
    name: 'GLICEMIA EM JEJUM',
    hasResult: true,
    resultType: 'text',
    result: 'Glicemia: 95 mg/dL\n\nConclusão: Normal.',
  },
  {
    id: 9,
    doctor: 'Ana Costa',
    specialty: 'Endocrinologia',
    date: '2026-01-10',
    time: '16:45',
    name: 'HEMOGLOBINA GLICADA',
    hasResult: false,
    result: ''
  },
  {
    id: 10,
    doctor: 'Ana Costa',
    specialty: 'Endocrinologia',
    date: '2026-01-10',
    time: '16:45',
    name: 'TSH',
    hasResult: false,
    result: ''
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f6f8] font-sans text-gray-800">
      {/* Navbar */}
      <header className="bg-white border-b border-gray-200 flex items-center justify-between px-6 py-3 text-sm shadow-sm">
        <div className="flex items-center gap-8">
          <div className="text-[#2db2a5] font-bold text-2xl tracking-tighter">lc</div>
          <nav className="flex gap-6 text-gray-500 font-medium">
            <a href="#" className="hover:text-[#2db2a5]">Agendamentos</a>
            <a href="#" className="hover:text-[#2db2a5]">Atendimentos</a>
            <a href="#" className="hover:text-[#2db2a5]">Finanças</a>
            <a href="#" className="hover:text-[#2db2a5]">Aplicativos</a>
            <a href="#" className="hover:text-[#2db2a5]">Guias TISS</a>
            <a href="#" className="hover:text-[#2db2a5]">Estoque</a>
            <a href="#" className="hover:text-[#2db2a5]">Configurações</a>
          </nav>
        </div>
        <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 text-gray-600 hover:bg-gray-50 font-medium">
          Chamar Maria
        </button>
      </header>

      {/* Subnav */}
      <div className="px-6 pt-3">
        <div className="inline-block bg-[#e9ecef] text-gray-600 px-4 py-1.5 rounded-t-md text-sm font-medium">
          Pacientes
        </div>
      </div>

      <main className="px-6 pb-6">
        {/* Patient Header */}
        <div className="bg-white rounded-tr-md shadow-sm border border-gray-200 p-3 flex gap-4 items-stretch">
          {/* Timer */}
          <div className="flex flex-col items-center justify-center border-r border-gray-200 pr-4 min-w-[100px]">
            <span className="text-2xl font-bold text-gray-800 mb-1">02:10</span>
            <button className="flex items-center gap-1 bg-[#2db2a5] text-white px-3 py-1 rounded text-xs font-medium hover:bg-[#25998e] transition-colors">
              <Pause size={12} className="fill-current" /> Concluir
            </button>
          </div>

          {/* Patient Info */}
          <div className="flex items-center gap-3 border-r border-gray-200 pr-4 flex-1">
            <div className="w-12 h-12 bg-[#e6f5f4] rounded-full flex items-center justify-center text-[#2db2a5]">
              <User size={24} />
            </div>
            <div>
              <div className="font-semibold text-gray-800 text-sm">Paciente Test 1</div>
              <div className="text-xs text-gray-500">Masculino, Desenvolvedor</div>
              <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                35a, 6m, 1d 
                <Edit2 size={12} className="text-[#2db2a5] cursor-pointer ml-1" />
                <Phone size={12} className="text-[#2db2a5] cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-col justify-center border-r border-gray-200 pr-4 text-xs text-gray-500 gap-1 min-w-[100px]">
            <div className="font-medium"># paciete</div>
            <div className="font-medium"># poliqueixoso</div>
          </div>

          {/* Question Box */}
          <div className="flex items-center justify-center border border-gray-200 rounded p-3 text-[#2db2a5] text-sm font-medium cursor-pointer hover:bg-gray-50 min-w-[160px] mx-2">
            <FileText size={16} className="mr-2" />
            Selecionar pergunta
          </div>

          {/* List 1 */}
          <div className="flex flex-col justify-center border-r border-gray-200 px-4 text-xs text-gray-600 gap-1 min-w-[120px]">
            <div className="flex items-center gap-1"><ChevronDown size={12} className="-rotate-90 text-gray-400"/> alimento</div>
            <div className="flex items-center gap-1"><ChevronDown size={12} className="-rotate-90 text-gray-400"/> DIPIRONA</div>
          </div>

          {/* List 2 (ICD) */}
          <div className="flex flex-col justify-center text-xs text-gray-600 gap-1 flex-1 pl-2">
            <div>A07.0 Balantidíase.</div>
            <div>A36.3 Difteria cutânea.</div>
            <div>E23.2 Diabetes insípido.</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border-x border-gray-200 flex text-sm font-medium text-gray-500 overflow-x-auto">
          <button className="flex items-center gap-2 px-5 py-3 hover:text-[#2db2a5] hover:bg-gray-50 whitespace-nowrap">
            <Activity size={16} className="text-[#2db2a5]" /> Evolução
          </button>
          <button className="flex items-center gap-2 px-5 py-3 hover:text-[#2db2a5] hover:bg-gray-50 whitespace-nowrap">
            <FileDigit size={16} className="text-[#2db2a5]" /> Receita digital
          </button>
          <button className="flex items-center gap-2 px-5 py-3 hover:text-[#2db2a5] hover:bg-gray-50 whitespace-nowrap">
            <Printer size={16} className="text-[#2db2a5]" /> Impressão
          </button>
          <button className="flex items-center gap-2 px-5 py-3 hover:text-[#2db2a5] hover:bg-gray-50 whitespace-nowrap">
            <Folder size={16} className="text-[#2db2a5]" /> Arquivos
          </button>
          <button className="flex items-center gap-2 px-5 py-3 hover:text-[#2db2a5] hover:bg-gray-50 whitespace-nowrap">
            <LineChart size={16} className="text-[#2db2a5]" /> Gráficos
          </button>
          <button className="flex items-center gap-2 px-5 py-3 text-[#2db2a5] border-t-2 border-[#2db2a5] bg-gray-50/50 whitespace-nowrap">
            <Stethoscope size={16} /> Exames solicitados
          </button>
          <button className="flex items-center gap-2 px-4 py-3 hover:text-[#2db2a5] hover:bg-gray-50">
            <Plus size={18} />
          </button>
        </div>

        {/* Main Content Area */}
        <div className="bg-white border border-gray-200 rounded-b-md shadow-sm p-6">
          <ExamsContent />
        </div>
      </main>
    </div>
  );
}

function ExamsContent() {
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterWithResults, setFilterWithResults] = useState(true);
  const [filterWithoutResults, setFilterWithoutResults] = useState(true);

  // Filter and Group exams
  const filteredExams = MOCK_EXAMS.filter(exam => {
    if (!filterWithResults && exam.hasResult) return false;
    if (!filterWithoutResults && !exam.hasResult) return false;

    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      exam.doctor.toLowerCase().includes(term) ||
      exam.specialty.toLowerCase().includes(term) ||
      exam.name.toLowerCase().includes(term)
    );
  });

  const groupedExams = filteredExams.reduce((acc, exam) => {
    if (!acc[exam.doctor]) {
      acc[exam.doctor] = [];
    }
    acc[exam.doctor].push(exam);
    return acc;
  }, {} as Record<string, typeof MOCK_EXAMS>);

  return (
    <div className="flex flex-col relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative">
        <h2 className="text-lg font-semibold text-gray-800">Exames solicitados</h2>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text"
              placeholder="Pesquisar exames..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-4 py-1.5 border border-gray-300 text-sm focus:outline-none focus:border-[#2db2a5] w-64"
            />
          </div>
          <button 
            className="text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors border border-gray-300 px-4 py-1.5"
            onClick={() => setShowMoreFilters(!showMoreFilters)}
          >
            Filtrar
          </button>
        </div>

        {/* Filters Modal */}
        {showMoreFilters && (
          <div className="absolute top-full right-0 mt-2 w-[500px] bg-white border border-gray-200 shadow-xl rounded-md p-5 z-10">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-xs text-gray-700 uppercase tracking-wide">Filtros</h3>
              <button onClick={() => setShowMoreFilters(false)} className="text-gray-400 hover:text-gray-600">
                <X size={16} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Data inicial</label>
                <input type="date" className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 outline-none focus:border-[#2db2a5]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Data final</label>
                <input type="date" className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 outline-none focus:border-[#2db2a5]" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Profissional</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 outline-none focus:border-[#2db2a5]" />
            </div>

            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-700 mb-2">Status do Resultado</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={filterWithResults} 
                    onChange={(e) => setFilterWithResults(e.target.checked)} 
                    className="rounded border-gray-300 text-[#2db2a5] focus:ring-[#2db2a5]" 
                  />
                  Com resultado
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={filterWithoutResults} 
                    onChange={(e) => setFilterWithoutResults(e.target.checked)} 
                    className="rounded border-gray-300 text-[#2db2a5] focus:ring-[#2db2a5]" 
                  />
                  Sem resultado
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
              <button 
                className="px-5 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => {
                  setFilterWithResults(true);
                  setFilterWithoutResults(true);
                  setShowMoreFilters(false);
                }}
              >
                Limpar
              </button>
              <button 
                className="px-5 py-2 bg-[#2db2a5] text-white rounded text-sm font-medium hover:bg-[#25998e] transition-colors"
                onClick={() => setShowMoreFilters(false)}
              >
                Filtrar
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Exams List */}
      <div className="pl-4 border-l-2 border-gray-200 ml-2">
        {Object.entries(groupedExams).map(([doctor, exams]) => {
          const firstExam = exams[0];
          const dateObj = new Date(firstExam.date);
          const formattedDate = dateObj.toLocaleDateString('pt-BR');
          const hasAnyResult = exams.some(exam => exam.hasResult);

          return (
            <ExamGroupCard 
              key={doctor} 
              doctor={doctor} 
              exams={exams} 
              formattedDate={formattedDate} 
              firstExam={firstExam} 
              hasAnyResult={hasAnyResult} 
            />
          );
        })}
      </div>
    </div>
  );
}

function ExamGroupCard({ doctor, exams, formattedDate, firstExam, hasAnyResult }: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-8 relative">
      {/* Timeline dot */}
      <div className="absolute -left-[23px] top-4 w-3 h-3 rounded-full border-2 border-orange-500 bg-white"></div>
      
      {/* Timeline connector line to content */}
      <div className="absolute -left-4 top-5 w-4 h-px bg-gray-200"></div>

      <div className="border border-gray-200 bg-white">
        {/* Card Header (Doctor & Date Info) */}
        <div className={`flex items-start justify-between p-4 border-b border-gray-200 ${hasAnyResult ? 'bg-[#f0f7ff]' : ''}`}>
          <div className="flex items-start gap-12">
            <div className="flex flex-col text-sm text-gray-600">
              <span>{formattedDate}</span>
              <span>{firstExam.time}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
                {/* Placeholder for doctor image */}
                <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white text-xs">
                  {doctor.charAt(0)}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-700">{doctor}</span>
                <span className="text-xs text-gray-500">{firstExam.specialty}</span>
              </div>
            </div>
          </div>

          {/* Action Button in Header */}
          <button 
            onClick={() => hasAnyResult && setIsExpanded(!isExpanded)}
            disabled={!hasAnyResult}
            className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 border rounded transition-colors ${
              hasAnyResult 
                ? 'text-gray-600 hover:text-gray-800 border-gray-300 bg-white hover:bg-gray-50 cursor-pointer' 
                : 'text-gray-400 border-gray-200 bg-gray-50 cursor-not-allowed'
            }`}
          >
            <FileText size={14} />
            Ver Resultado
          </button>
        </div>
        
        {/* Card Body (Exams List) */}
        <div className="p-4 pb-2">
          <div className="flex flex-col">
            {exams.map((exam: any, index: number) => (
              <ExamRow key={exam.id} exam={exam} isLast={index === exams.length - 1} />
            ))}
          </div>
        </div>

        {/* Collapsible Results Area */}
        {isExpanded && hasAnyResult && (
          <div className="border-t border-gray-200 bg-gray-50 p-4">
            <div className="text-sm text-gray-700 whitespace-pre-line font-mono leading-relaxed bg-white p-4 border border-gray-200 rounded">
              {exams.filter((e: any) => e.hasResult).map((exam: any, index: number) => (
                <React.Fragment key={`result-${exam.id}`}>
                  {exam.resultType === 'image' ? (
                    <a href={exam.resultLink || '#'} className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2 py-1">
                      <FileText size={16} />
                      Visualizar imagem do exame
                    </a>
                  ) : (
                    <div className={index > 0 ? "mt-4" : ""}>
                      {exam.result}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ExamRow({ exam, isLast }: any) {
  return (
    <div className={`flex items-center py-3 hover:bg-gray-50 transition-all ${!isLast ? 'border-b border-gray-100' : ''}`}>
      {/* Exam Name Column */}
      <div className="flex-1">
        <span className="text-xs text-gray-700">{exam.name}</span>
      </div>

      {/* Action Column */}
      <div className="w-16 flex justify-end items-center pr-2">
        <button className="text-gray-400 hover:text-gray-600 p-1">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
  );
}
