
import React, { useState } from 'react';
import Header from './components/Header.tsx';
import ScanView from './components/ScanView.tsx';
import HistoryView from './components/HistoryView.tsx';
import StatsView from './components/StatsView.tsx';
import { useTransactions } from './hooks/useTransactions.ts';

type View = 'scan' | 'history' | 'stats';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('scan');
  const { transactions, addTransaction, deleteTransaction, updateTransaction } = useTransactions();

  const renderView = () => {
    switch (currentView) {
      case 'scan':
        return <ScanView addTransaction={addTransaction} />;
      case 'history':
        return <HistoryView transactions={transactions} deleteTransaction={deleteTransaction} updateTransaction={updateTransaction} />;
      case 'stats':
        return <StatsView transactions={transactions} />;
      default:
        return <ScanView addTransaction={addTransaction} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col font-sans">
      <main className="flex-grow container mx-auto p-4 pb-24">
        {renderView()}
      </main>
      <Header currentView={currentView} setCurrentView={setCurrentView} />
    </div>
  );
};

export default App;
