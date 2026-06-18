export function LabelFormulario({children, htmlFor}){
  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>
  )
}