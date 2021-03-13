import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre=null;
  apellido=null;
  celular=null;
  email=null;

  usuarios=[];

  constructor(public alertController: AlertController) {}

  guardarDatos(){
    //Guardando datos en memoria
      console.log(this.nombre)
      this.usuarios.push({nombre: this.nombre})

      console.log(this.apellido)
      this.usuarios.push({apellido: this.apellido})

      console.log(this.celular)
      this.usuarios.push({celular: this.celular})

      console.log(this.email)
      this.usuarios.push({email: this.email})

      //Limpiando Datos
      this.nombre = "";
      this.apellido = "";
      this.celular = "";
      this.email = "";
     
  }

  borrarDatos(i){
    this.usuarios.splice(i,1)

  }

  async editarDatos(i) {
  const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'EDITAR',
      inputs: [
        {
          name: 'nameedit',
          type: 'text',
          placeholder: 'NOMBRE',
          value: this.usuarios[i].nombre
        },
        {
          name: 'apellidoedit',
          type: 'text',
          placeholder: 'APELLIDO',
          value: this.usuarios[i].apellido
        },
        {
          name: 'celularedit',
          type: 'text',
          placeholder: 'CELULAR',
          value: this.usuarios[i].celular
        },
        {
          name: 'emailedit',
          type: 'text',
          placeholder: 'EMAIL',
          value: this.usuarios[i].email
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
        { text: 'Editar', handler: data => {
                    
          this.usuarios[i].nombre = data.nameedit;
          this.usuarios[i].apellido = data.apellidoedit;
          this.usuarios[i].celular = data.celularedit;
          this.usuarios[i].email = data.emailedit;  
          
        }
        }
        
      ]
    });

    await alert.present();
  }
}

