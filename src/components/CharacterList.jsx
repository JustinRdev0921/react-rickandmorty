import { useEffect, useState } from "react"
import Character from "./Character"

function NavPage(props){
    return (
        <header className="d-flex justify-content-between align-items-center">
            <p>Página: {props.page}</p>
            <div className="">
            <button className="btn btn-primary btn-sm"
            onClick={()=> props.setPage(props.page+1)}>
                Pagina {props.page +1}
            </button>
            </div>
            
        </header>
    )
}

function CharacterList() {
    const [characters, setcharacters] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setPage] = useState(1)
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const data = await response.json()
            setloading(false)
            setcharacters(data.results);
        }
        fetchData();
    }, [page])


    return (
        <div className="container">
            <NavPage page={page} setPage={setPage}/>
            {
                loading 
                ? (<div>Loading...</div>)
                : (<div className="row">
                    {
                        characters.map(character => {
                            return (
                                <div key={character.id} className="col-md-4">
                                    <Character character={character} />
                                </div>

                            )
                        })
                    }
                </div>)
            }
            <NavPage page={page} setPage={setPage}/>
        </div>
    )
}

export default CharacterList