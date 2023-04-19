// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

  //VALIDATE THAT THE SECRET CONFIRM THAT WE CREATE FROM THE SUPABASE
  // IT IS CORRECT WITH the 'supersecret'
  // THIS DOES WE LOOK AT THE QUERY PARAMETERS TO SEE IF SECRET
  // FORWARDESD FROM SUPABASE MATHCES WHAT WE HAVE WE SET WITH
  // THE ENVIOREMENT VARIABLLE
  if(req.query.secret !== process.env.REVALIDATE_SECRET){
    return res.status(401).json({message: 'Invalid Token'})//if it dosen't we just return a messague invalid
  }

  try{
    //REGENERATE OUR INDEX ROUTE SHOWING THE IMAGES
    await res.unstable_revalidate('/') //REGENERATE
    return res.json({ revalidate: true }) //REVALIDATE = TRUE NOW 
  }catch(err){
    return res.status(500).send('Error revalidating') // THIS IS FOR AN ERROR OCURR ON THE REVALIDATE
  }
}


