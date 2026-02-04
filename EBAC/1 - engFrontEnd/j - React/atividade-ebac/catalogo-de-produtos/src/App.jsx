import { useEffect, useState } from 'react'
import ProdutoCard from './components/CardProduto'
import './App.css'
import guitarImg from './assets/images/guitar.jpg'
import bassImg from './assets/images/baixo.jpg'
import drumsImg from './assets/images/bateria.jpg'
import keyboardImg from './assets/images/piano.jpg'

const API_URL = 'https://crudcrud.com/api/2cee8ec59dfa4dadb2db0ca8cbd15b4c/products'

function App() {
  // variável que recebe os produtos fixos
  const [fixedProduts, setFixedProducts] = useState([
    {
      id: 1,
      img: guitarImg,
      title: "Guitarra",
      price: 5000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }, {
      id: 2,
      img: bassImg,
      title: "Baixo",
      price: 3000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }, {
      id: 3,
      img: drumsImg,
      title: "Bateria",
      price: 4000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }, {
      id: 4,
      img: keyboardImg,
      title: "Piano",
      price: 10000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ])

  // variável que receberá os produtos adicionados
  const [products, setProducts] = useState([])

  // estado de carregamento
  const [loading, setLoading] = useState(true);

  // cada informação obtida em cada input
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  // buscar os dados na API quando o componente for montado
  useEffect(() => {

    // função criad para receber o async/await dentro do useEffect
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL, { method: 'GET' });

        // tratamento de erro em caso de erro com o protocolo HTTP
        if (!response.ok) {
          throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        // constante que recebe os dados da API trnasformados em json (vêm como strings)
        const data = await response.json();

        // simulação de carregamento: só realiza o "setProducts(data) e, em seguida, o "setLoading(false) após 3000 milissegundos
        setTimeout(() => {
          setProducts(data);
          setLoading(false);
        }, 3000);

        // tratamento de erro caso o que estiver em "try" falhe
      } catch (error) {
        console.error("Houve um erro ao buscar as tarefas:", error.message);
        setProducts([]);
        setLoading(false);
      }
    };

    // executa a função assíncrona
    fetchProducts();
  }, []);

  // função para lidar com o que será feito após o "submit" do formulário
  const handleSubmit = (e) => {
    // evita o recarregamento da página
    e.preventDefault();

    // caso seja inserido o nome/preço/descrição de um produto em branco, nada será retornado. Também validado por "requeired"
    if (title.trim() === '') return;

    // variável para receber as informações do novo produto e enviar para API
    const newProduct = {
      //id: products.length + 1,
      img: "https://placehold.co/600x400",
      title: title.trim(),
      // preço transformado em número, já que o que é inserido é uma string
      price: Number(price),
      description: description.trim()
    };

    // função criada para realizar o 'POST' de um novo produto na API
    const fetchNewProduct = async () => {
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newProduct)
        })

        const newProductData = await response.json();

        // adiciona o novo produto à lista já existente
        setProducts([...products, newProductData]);
        setTitle('');
        setPrice('');
        setDescription('');

      } catch (error) {
        console.error("Houve um erro ao buscar as tarefas:", error);
        setProducts([]);
      }
    }

    // executa a função assíncrona que fará um 'POST' de um novo produto na API
    fetchNewProduct()
  }

  // estilização styled components


  return (

    <main className=" bg-slate-500 flex flex-col justify-center gap-4">

      <div className='mx-auto space-y-4 pt-7'>
        <div className='text-3xl text-slate-100 font-bold text-center'>Lista de produtos</div>
      </div>

      <div className='flex flex-row justify-evenly'>
        <div className='grid grid-cols-4 h-1/3 p-4 w-2/3 gap-2'>

          {/* produtos fixos */}
          {fixedProduts.map((product) =>
            <ProdutoCard
              key={product.id}
              img={product.img}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          )}

          {/* mensagem que será exibida enquanto "loading" for verdadeira */}
          {loading && (
            <div className="col-span-4 text-center text-white text-xl font-semibold animate-pulse py-6">
              Carregando...
            </div>
          )}

          {/* elementos que serão exibidos enqianto "loading" for falsa */}
          {!loading && products.map((product) =>
          
            <ProdutoCard
              key={product._id}
              img={product.img}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          )}
        </div>
        <div className="flex flex-col justify-center h-screen w-1/3">

          {/* Boas práticas de um formulário com React: todos os inputs com value e onChange */}
          <form
            className='flex flex-col justify-center items-center px-3 py-2 rounded-md font-medium bg-white gap-3 mx-14'
            onSubmit={handleSubmit}>
            <h1 className='text-xl font-bold'>Adicionar produto</h1>
            <input type="text" required placeholder="Insira o nome do produto"
              className="px-4 py-2 bg-slate-200 rounded-sm text-xs w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input type="number" required placeholder="Insira o preço do produto"
              className="px-4 py-2 bg-slate-200 rounded-sm text-xs w-full"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <textarea rows="5" maxLength="50" required placeholder="Insira a descrição"
              className="px-2 py-1 bg-slate-200 rounded-sm w-full text-xs"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button type="submit"
              className="bg-slate-400 text-white px-4 py-2 rounded-md font-medium hover:bg-slate-500 hover:cursor-pointer">Adicionar Produto</button>
          </form>
        </div>
      </div>

    </main>
  )
}

export default App
