// GET
app.get('/users', (req, res) => {
    // Lógica para obtener una lista de usuarios
    res.json({ message: 'Obtener lista de usuarios' });
  });
  
// POST
app.post('/users', (req, res) => {
    // Lógica para crear un nuevo usuario
    const newUser = req.body; // Datos del nuevo usuario enviados en el cuerpo de la solicitud
    res.json({ message: 'Crear un nuevo usuario', user: newUser });
  });
  
// PUT
app.put('/users/:id', (req, res) => {
    // Lógica para actualizar un usuario existente
    const userId = req.params.id; // ID del usuario obtenido de los parámetros de la ruta
    const updatedUser = req.body; // Datos actualizados del usuario enviados en el cuerpo de la solicitud
    res.json({ message: `Actualizar usuario con ID ${userId}`, user: updatedUser });
  });
  
// PATCH
app.patch('/users/:id', (req, res) => {
    // Lógica para actualizar parcialmente un usuario existente
    const userId = req.params.id; // ID del usuario obtenido de los parámetros de la ruta
    const updatedFields = req.body; // Campos actualizados del usuario enviados en el cuerpo de la solicitud
    res.json({ message: `Actualizar campos del usuario con ID ${userId}`, fields: updatedFields });
  });
  
