import PropTypes from 'prop-types'

export const PropsComponente = ({titulo, subtitulo, numero = 0}) => {
  return (
    <>
    <h1>{titulo}</h1>
    <h2>{subtitulo}</h2>
    <h3>{numero}</h3>

    </>
  )
}
PropsComponente.prototype ={
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
    numero: PropTypes.number

}
PropsComponente.defaultProps = {
    titulo:"soy un titulo alternativo"
, 
subtitulo: " y yo un subtítulo por defecto."
}