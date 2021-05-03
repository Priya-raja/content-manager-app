
export default async function resources(req,res) {

    if(req.method === "GET") {

        const dataRes = await fetch("http://localhost:3000/api/resources");
        const data = await dataRes.json();
       return res.send(data);
    }
    
    if(req.method === "POST") {
        console.log(req.body);
        const { title, description, link, timeToFinish, priority} = req.body;

    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send("Data are missing!");
    }
        return res.send("I am sending POST");
    }
}