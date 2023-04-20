import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('form') form!: ElementRef;
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('messageInput') messageInput!: ElementRef;
  @ViewChild('formButton') formButton!: ElementRef;


  async sendMail() {
    console.log('Sending Mail', this.form);
    const nameInput = this.nameInput.nativeElement;
    const emailInput = this.emailInput.nativeElement;
    const messageInput = this.messageInput.nativeElement;
    const formButton = this.formButton.nativeElement;
    nameInput.disabled = true;
    emailInput.disabled = true;
    messageInput.disabled = true;
    formButton.disabled = true;

    const fd = new FormData();
    fd.append('name', nameInput.value);
    fd.append('email', emailInput.value);
    fd.append('message', messageInput.value);
    await fetch('https://niklas-kahr.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );
    nameInput.disabled = false;
    emailInput.disabled = false;
    messageInput.disabled = false;
    formButton.disabled = false;
    this.form.nativeElement.innerHTML += '<p class="success">Your message has been sent successfully!</p>';
    // delete success message after 5 seconds (fade out)
    setTimeout(() => {
      const success = document.querySelector('.success');
      success?.classList.add('fade-out');
      setTimeout(() => {
        success?.remove();
      }, 1250);
    }, 3500);
  }
}