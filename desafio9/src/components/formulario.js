import React from 'react';
import { useForm } from 'react-hook-form';
import './formulario.css'; // Certifique-se de importar o arquivo CSS corretamente

const Formulario = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Nome:</label>
        <div className="input-container">
          <input {...register('nome', { required: true, pattern: /^[a-zA-Z\s]*$/ })} className={`input ${errors.nome ? 'input-error' : ''}`} />
        </div>
        {errors.nome && <span className="error-message">O campo nome é obrigatório e não deve conter caracteres especiais ou números.</span>}
      </div>

      <div className="form-group">
        <label>E-mail:</label>
        <div className="input-container">
          <input {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} className={`input ${errors.email ? 'input-error' : ''}`} />
        </div>
        {errors.email && <span className="error-message">O campo e-mail é obrigatório e deve ser um e-mail válido.</span>}
      </div>

      <div className="form-group">
        <label>Senha:</label>
        <div className="input-container">
          <input {...register('senha', { required: true, minLength: 8 })} type="password" className={`input ${errors.senha ? 'input-error' : ''}`} />
        </div>
        {errors.senha && <span className="error-message">O campo senha é obrigatório e deve ter pelo menos 8 caracteres.</span>}
      </div>

      <div className="form-group">
        <label>Data de Nascimento:</label>
        <div className="input-container">
          <input {...register('dataNascimento', { required: true })} type="date" className={`input ${errors.dataNascimento ? 'input-error' : ''}`} />
        </div>
        {errors.dataNascimento && <span className="error-message">O campo data de nascimento é obrigatório e deve ser uma data válida.</span>}
      </div>

      <div className="form-group">
        <label>CEP:</label>
        <div className="input-container">
          <input {...register('cep', { pattern: /^\d{5}-\d{3}$/ })} className={`input ${errors.cep ? 'input-error' : ''}`} />
        </div>
        {errors.cep && <span className="error-message">O CEP deve estar no formato 00000-000.</span>}
      </div>

      <div className="form-group">
        <label>Sexo:</label>
        <div className="input-container">
          <select {...register('sexo')} className={`input ${errors.sexo ? 'input-error' : ''}`}>
            <option value="">Selecione</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="naoInformar">Prefiro não informar</option>
          </select>
        </div>
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
