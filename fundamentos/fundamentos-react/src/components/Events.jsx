const Events = () =>
{
    const handleMyEvent = (e)=>{
        console.log(e);
        console.log("Ativou evento!");
        
    };
    const renderSomething = (X) => {
        if(X){
            return <h1>Rederizando isso</h1>;
        }
        else{
            return <h1>Ou Renderizando isso</h1>;
        };
    };

    return(
        <div>

            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={()=> console.log("Clicou")}>Clique Aqui Também!</button>
            </div>
            <div>
                {renderSomething(true)} {/*utilza para renderizar na hora da execução*/}
                {renderSomething(false)}
            </div>
        </div>
        
    );
};
export default Events;