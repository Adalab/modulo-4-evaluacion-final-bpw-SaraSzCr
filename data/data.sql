INSERT INTO recetas_db.recetas (nombre, ingredientes, instrucciones)
VALUES ('tortilla de patatas', 'patatas, huevos, cebolla, aceite de oliva, sal', 'Pelar, lavar y secar las patatas. Cortarlas en rodajas finas e introducirlas en una sartén honda con el aceite de oliva a temperatura media para que se cuezan lentamente. Agregar la cebolla cortada finita. Freírla lentamente con las patatas hasta que estén blandas y empiecen a dorarse. Conviene remover con la espumadera y cortar con la misma los ingredientes. Al cabo de unos 10 minutos se escurre el aceite. Batir en un cuenco los huevos con un poco de sal. Agregar la mezcla de las patatas con la cebolla. Poner de nuevo la sartén con un poco del aceite escurrido y añadir toda la mezcla. Dejarlo a fuego lento tapando la sartén durante unos 5 ó 10 minutos, hasta que se dore por abajo. Dar la vuelta a la tortilla sobre sí misma con la ayuda de una tapadera y dejarla caer por el otro lado en la sartén hasta que se cuaje despacio. Ha de quedar dorada por ambos lados.')


INSERT INTO recetas_db.recetas (nombre, ingredientes, instrucciones)
VALUES ( 'pastel de zanahoria', ' zanahorias, huevos, azucar, harina, levadura para hornear, nueces picadas, canela en polvo, mantequilla'
'Ralla las zanahorias.
Pon en un bol los huevos y bátelos con la batidora de varillas durante un par de minutos. Agrega el azúcar moreno mientras sigues batiendo. Cuando se haya integrado, añade el aceite y sigue batiendo. 
Incorpora la harina tamizada. Agrega la levadura, el bicarbonato, la canela, la ralladura de limón, el jengibre y la nuez moscada rallada. Bate todo de nuevo con la batidora de varillas. Añade la zanahoria rallada y vuelve a batir hasta quede una mezcla homogénea.
Engrasa un molde con un poco de aceite o mantequilla y vierte la masa.
Hornea el pastel de zanahoria (con el horno precalentado) a 180ºC durante 40 minutos, hasta que el bizcocho esté hecho.
Saca el pastel del horno y déjalo templar. Desmolda y deja enfriar por completo.' )


INSERT INTO recetas_db.recetas (nombre, ingredientes, instrucciones)
VALUES ('batido de fresa casero', 'fresas, azucar, leche', 'Lavamos las fresas, les cortamos los rabitos y las cortamos en trozos, reservando algunas para la decoración.Las embadurnamos con azúcar y dejamos reposar durante 20 minutos en la nevera.A continuación ponemos las fresas con la leche en un bol y las trituramos con ayuda de la batidora hasta conseguir un batido cremoso.Si nos gusta más dulce podemos añadirle un poco más de azúcar.Lo pasamos por un colador si queremos que quede más fino y lo metemos en el frigorífico para que se enfríe.')



// Insertar nueva receta

INSERT INTO recetas (nombre, ingredientes, instrucciones) VALUES ('zumo de naranja','naranjas','exprimir naranjas')


// Actualizar receta

UPDATE recetas SET nombre = "bocadillo de calamares", ingredientes = "pan, calamares", instrucciones = "freir calamares, añadir un chorrito de limón y meterlos en el pan" WHERE id = 5


// Borrar una nueva receta

DELETE FROM recetas WHERE id = 4