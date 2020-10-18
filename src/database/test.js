const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // Inserir dados na tabela
    await saveOrphanage(db,{
        lat: "-27.2109325",
        lng: "-49.6448719",
        name: "Lar das meninss",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "998654270",
        images: [

            "https://images.unsplash.com/photo-1580673786010-4cde024ea5b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1576025773492-cc2eb828c42a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 18h até 8h",
        opening_on_weekens: "1"
    })

    //consultar dados da tabela
   const selectedOrphanages = await db.all("SELECT * FROM orphanages")
   console.log(selectedOrphanages)


    const orphanage = await db.all('SELECT * FROM orphanages WHERE id ="4"')
    console.log(orphanage)

    // deletar dado da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id ='5'"))
})