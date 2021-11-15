function Main(){
    let nombres = ["Lucía","Marina","Olivia"];

    return (<ul>
            {nombres.map((item)=>(<li>{item}</li>))}
            </ul>)
    )};

export default Main;