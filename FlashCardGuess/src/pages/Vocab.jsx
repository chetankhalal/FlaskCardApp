import { useEffect, useState } from "react";
import AddCard from "../components/AddCard";
import Card from "../components/Card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import api from "../../api";

function Vocab() {

  const [Cards, setCards] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);

  const Get_data = async (currentSkip) => {
    try {
      setLoading(true);

      const response = await api.get("/vocab", {
        params: {
          skip: currentSkip,
          limit: 10
        }
      });

      setCards(prev => [...prev, ...response.data]);

    } catch (error) {
      console.error("Error fetching vocabulary:", error);
    } finally {
      setLoading(false);
    }
  };

  // Load first 10
  useEffect(() => {
    Get_data(0);
  }, []);

  // Load next 10
  const loadNext = () => {
    const nextSkip = skip + 10;
    setSkip(nextSkip)
    Get_data(nextSkip);
  };

  const loadprev = () => {
    if (skip > 0 ) {
      const prev = skip - 10;
      setSkip(prev)
      Get_data(prev)
    }
  }


  const [ShowAddCard, setShowAddCard] = useState(false);


  return (
    <div className="text-white pt-10">

      <h1 className="md:text-7xl text-2xl text-white font-bold text-center mb-5">
        Flash Card For Vocabulary
      </h1>

      <button
        className="bg-green-500 rounded-2xl p-3 font-bold cursor-pointer active:scale-95 hidden md:block absolute top-16 right-10"
        onClick={() => setShowAddCard(true)}
      >
        Add Word
      </button>


      <div className="grid grid-cols-3 gap-0">

        {/* LEFT */}
        <div
          className="hover:bg-gray-600 opacity-[0.4] hidden md:block"
          onClick={loadprev}
        >
          <div>
            {Cards.length === 0 && (
              <ChevronLeft
                className=" cursor-pointer"
                size={200}
                strokeWidth={3}
              />
            )}
          </div>
        </div>


        {/* CARDS */}
        <div className="bg-white w-screen md:w-auto p-10 grid place-items-center">

          {[...Cards].slice(0,3).map((card , id ) => (
            <Card
              key={id}
              identity = {id}
              Cards={Cards}
              setCards={setCards}
              {...card}
            />
          ))}

          { Cards.length === 0 && <div> <h1 className="text-2xl text-black font-normal"> if You have to continue then clik next Arrow</h1> </div>
          }

        </div>


        {/* RIGHT */}
        <div
          className="hover:bg-gray-600 opacity-[0.4] hidden md:block"
          onClick={loadNext}
        >
          <div>
            {Cards.length === 0 && skip > 0 && (
              <ChevronRight
                className=" cursor-pointer"
                size={200}
                strokeWidth={3}
              />
            )}
          </div>
        </div>

      </div>


      {loading && (
        <p className="text-center text-black">
          Loading...
        </p>
      )}


      {ShowAddCard && (
        <AddCard setShowAddCard={setShowAddCard} />
      )}

    </div>
  );
}

export default Vocab;