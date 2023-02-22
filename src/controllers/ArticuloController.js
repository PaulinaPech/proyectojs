const controller = {};

controller.get = (req,res)=>{
   req.getConnection((err, conn)=>{
     conn.query('SELECT * FROM Articulo', (err, Articulos)=>{
        if(err){
            res.json(err);
         }
         console.log(Articulos);
            res.render('Articulos', {
                data: Articulos
            });
         
     });
   });
};

controller.post = (req, res)=>{
   const data = req.body;
   req.getConnection((err,conn)=>{
    conn.query('INSERT INTO Articulo set ?', [data], (err, Articulos)=>{
    res.redirect('/');
    });
   })
};

controller.edit=(req,res)=>{
    const { idArticulo } = req.params;
    req.getConnection((err, conn)=>{
     conn.query('SELECT * FROM Articulo WHERE idArticulo = ?', [idArticulo], (err, Articulo)=>{
       res.render('Articulos_edit', {
          data: Articulo[0]
       });
     });
    });
 
 };
 
 controller.update = (req, res)=>{
    const { idArticulo } = req.params;
    const newArticulo = req.body;
    req.getConnection((err, conn)=>{
      conn.query('UPDATE Articulo set ? WHERE idArticulo = ? ', [newArticulo, idArticulo], (err, rows)=>{
       res.redirect('/');
      });
    });
 };

 controller.delete = (req, res) => {
    const { idArticulo } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM Articulo WHERE idArticulo = ?', [idArticulo], (err, rows) => {
        res.redirect('/');
      });
    });
  };
 
 
 
 module.exports = controller;
