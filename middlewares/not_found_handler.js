const not_found_handler =(req,res,next) => {
    return res.status(404).json({
        success: false,
        error: 'Ruta no Encontrada, Not Found',
        message:`La peticion ${req.method} con la URL: ${req.url}`
    })
}

export default not_found_handler;