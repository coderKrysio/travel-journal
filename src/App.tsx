import Navbar from './components/Navbar';
import Card from './components/Card';
import contents from './utils/contents';

function App() {
  const cards = contents.map((data) => {
    return(
      <>
        <Card key={data.id} {...data}/>
        <hr className='border-gray-600 m-6 w-[52rem]' />
      </>
    )
    })

  return (
    <div className="App bg-slate-900 ">
      <Navbar />
      <div className='flex flex-col justify-center items-center pt-3 mt-5 '>
        {cards}        
      </div>
    </div>
  );
}

export default App;
