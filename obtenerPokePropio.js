const obtenerPokePropio = ()=>{
    const num = input.value;

    axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`).then((res)=>{
        return res.data
    }).then((res)=>{
        console.log(res);
    })
}