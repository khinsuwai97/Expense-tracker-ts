import { useState } from 'react';

const useModalForm = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return { showForm, openForm, closeForm };
};

export default useModalForm;
