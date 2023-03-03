import { Buffer } from "buffer";



export const FetchAvatars = async(setAvatars)=>
{
 

            let FetchedAvatarArray = await new Promise( async(resolve, reject) =>
            {
                        resolve(Array.from({ length: 1 }, async (arg, i) => 
                    {
                        let response = await fetch(`${process.env.AV_API}/${Math.round((Math.random() * 1000) * (Math.random() * 100) * (Math.random() * 1000))}?apikey=${process.env.AV_API_KEY}`, {method: 'GET',})
                              
                        let data = await response.text()

                        return  arg = new Buffer(data).toString("base64")
                    }))
            })

            /* let FetchedAvatarArray = Array.from({ length: 5 }, async (arg, i) => 
            {
                let response = await FetchAvatars(Math.round((Math.random() * 1000) * (Math.random() * 100) * (Math.random() * 1000)))

                let data = await response.text()

                return  arg = new Buffer(data).toString("base64")
            }) */

            let DataArray = await Promise.all([...FetchedAvatarArray])
            setAvatars(DataArray)
}



export const setUserAvatar = async(user,selectedAvatar,setUser,loading, setLoading)=>
{
  setLoading (true)
    let response = await fetch(`${process.env.SERVER}/api/user/profile`, 
            {
              method: 'POST',
              body: JSON.stringify({user,selectedAvatar}),
              headers: {'Content-type': 'application/json; charset=UTF-8',}
            })



      let data = await response.json()
      console.log(data,response,"data in setUserAvatar function")

      if(data)
      {
        setUser(data)
        setLoading (false)
        window.location.replace('/login')
      }
}