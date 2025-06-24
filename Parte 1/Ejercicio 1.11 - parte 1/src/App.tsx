import { useState } from 'react';
import "tailwindcss";

// const Header = (props) => {
//   console.log(props)
//   return (
//     <h1>{props.course}</h1>

//   )
// }

// const Content = ... {
//   return(
//     <div>
//       <part .../>
//       <part .../>
//       <part .../>
//     </div>
//   )
// }

// interface Datos {
//   nombre: string,
//   edad: number
// }

// const Hola = (props: Datos) =>{

//   const año = () =>{
//    const fecha = new Date().getFullYear(); 
//    return fecha - props.edad;
//   }

//   return (
//     <div>
//       <p>hola {props.nombre} tu edad es: {props.edad}</p>
//       <p>tu año de nacimiento es: {año()}</p>
//     </div>
//   )
// }

interface Datos {
  good: number,
  neutral: number,
  bad: number
}

const Estadisticas = (props: Datos) => {

  const totalComentarios = () => {
    return props.good + props.neutral + props.bad;
  }

  const comentariosPositivos = () => {
    return totalComentarios() === 0 ?
      <p>No haz agregado ningun comentario positivo</p>
      : (props.good / totalComentarios()) * 100;
  }

  const promedioComentarios = () => {
    return totalComentarios() === 0 ? <p>No hay comentarios totales</p>
      : totalComentarios() / 3;
  }

  if (totalComentarios() === 0) {
    return (
      <p>No hay datos disponibles</p>
    )
  }

  return (
    <div className="mt-8 flex justify-center">
      <table className="min-w-[350px] bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th colSpan={2} className="bg-blue-600 text-white text-xl py-3">Estadísticas</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-base">
          <tr>
            <td className="py-2 px-4 font-medium">Good:</td>
            <td className="py-2 px-4">{props.good}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="py-2 px-4 font-medium">Neutral:</td>
            <td className="py-2 px-4">{props.neutral}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 font-medium">Bad:</td>
            <td className="py-2 px-4">{props.bad}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="py-2 px-4 font-medium">Total de comentarios:</td>
            <td className="py-2 px-4">{totalComentarios()}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 font-medium">Promedio de comentarios:</td>
            <td className="py-2 px-4">{promedioComentarios()}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="py-2 px-4 font-medium">Comentarios positivos:</td>
            <td className="py-2 px-4">{comentariosPositivos()}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const anecdotas = {

  }

  return (
     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Sistema de Feedback</h1>
      <div className="flex gap-6 mb-8">
        <button
          onClick={() => setGood(good + 1)}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded shadow transition"
        >
          Good
        </button>
        <button
          onClick={() => setNeutral(neutral + 1)}
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded shadow transition"
        >
          Neutral
        </button>
        <button
          onClick={() => setBad(bad + 1)}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded shadow transition"
        >
          Bad
        </button>
      </div>
      <Estadisticas good={good} neutral={neutral} bad={bad} />
    </div>
  )



  {/* <h1>habla pa ve</h1>
  <Hola nombre='isaac' edad={25}/>
  <Hola nombre='diana patricia molina sanchez' edad={49}/>
  <Hola nombre={nombre} edad={edad}/> */}

  // const course = 'Half Stack application development'

  // const parts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }
  // ]

  // return (
  //   <div>
  //     <Header course={course} />
  //     <Content parts={parts} />    

  //   </div>
  // )
}



export default App;
