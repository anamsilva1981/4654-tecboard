import './label-formulario-estilos.css';

export function LabelFormulario({children, htmlFor}){
  return (
    <label htmlFor={htmlFor} className='label-form'>
      {children}
    </label>
  )
}