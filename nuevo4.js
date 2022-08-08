instrucciones paara git 

intruccion para iniciar un proyecto como git
git init

instruccion para agregar archivos
git add "nombre del archivo sin las comillas"

para agregar todo lo pendeinte
git add.

configuracion global
git config --global user.email "funerhk@gmail.com"
git config --global user.name "daniel corona"

para hacer commit 
git commit -m "version 1.0"

para consultar el estado del repositorio asi como las cambios y commits pendientes
git status

restaurar un archivo 
git restore "nombre del archivo sin comillas"
git checkout -- "nombre del archivo sin comillas "

ver las ramas de git 
git branch

crear rama en git 
git branch "nombre de la nueva rama sin comillas"

cambiar de rama
git checkout "nombre de la rama sin comillas"

muestra todos los commits del repositorio
git log

editar la configuracion global 
git config --global --edit


subir a repo remoto; esta instruccion vincula el repositorio local con el repositorio remoto y el git te genera esta instruccion cuando creas un repo remoto 
git remote add origin git@github.com:funerhk/proyecto-git.git

para subir el primer comit inicial se usa push 
git push -u origin master

para subir nuevos cambios al repositorio remoto, primero se tiene que guardar los cambios localmente,
se hace commit localmente, posterior se hace push.


para bajar los cambios del repositorio remoto al repositorio local se emplea la instruccion.
git pull.

repasar git merge 