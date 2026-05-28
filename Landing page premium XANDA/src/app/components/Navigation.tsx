import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

interface NavigationProps {
  backTo: string;
  backLabel: string;
}

export function Navigation({ backTo, backLabel }: NavigationProps) {
  return (
    <header className="bg-[#0D1B2A] text-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          to={backTo}
          className="inline-flex items-center gap-2 text-[#D4B78A] hover:text-white transition-colors mb-4"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}
        >
          <ArrowLeft className="w-4 h-4" />
          {backLabel}
        </Link>
        <Link to="/">
          <h1 className="text-[#F3F1EB] cursor-pointer hover:text-[#D4B78A] transition-colors" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 300,
            letterSpacing: '0.05em'
          }}>
            XANDA
          </h1>
        </Link>
      </div>
    </header>
  );
}
