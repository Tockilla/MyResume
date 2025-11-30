document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Validacija
  let ok = true;
  if (!this.firstName.value.trim()) ok = false;
  if (!this.lastName.value.trim()) ok = false;
  if (!this.address.value.trim()) ok = false;
  const emailVal = this.email.value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) ok = false;
  const phoneVal = this.phone.value.trim();
  if (phoneVal && !/^[+\d]?(?:[\d-.\s()]*)$/.test(phoneVal)) ok = false;

  if (!ok) {
    // pažymėk invalid laukai...
    return;
  }

  // 1) Atvaizduok rezultatus
  const data = {
    firstName: this.firstName.value.trim(),
    lastName: this.lastName.value.trim(),
    email: emailVal,
    phone: phoneVal || '-',
    address: this.address.value.trim(),
    q1: Number(this.q1.value),
    q2: Number(this.q2.value),
    q3: Number(this.q3.value)
  };
  document.getElementById('form-results').innerHTML = `
    <p>Vardas: ${data.firstName}</p>
    <p>Pavardė: ${data.lastName}</p>
    <p>El. paštas: ${data.email}</p>
    <p>Tel. Numeris: ${data.phone}</p>
    <p>Adresas: ${data.address}</p>
    <p>Klausimas 1: ${data.q1}</p>
    <p>Klausimas 2: ${data.q2}</p>
    <p>Klausimas 3: ${data.q3}</p>
  `;
  const avg = ((data.q1 + data.q2 + data.q3) / 3).toFixed(1);
  document.getElementById('average-result').textContent = `Vidurkis: ${avg}`;

  // 2) Parodyk popup po average
  const popup = document.getElementById('popup-message');
  popup.classList.remove('hidden');
  popup.classList.add('visible');
  setTimeout(() => {
    popup.classList.remove('visible');
    popup.classList.add('hidden');
  }, 3000);
  
});


// po apskaičiavimo vidurkio
document.getElementById('average-result').textContent = `Vidurkis: ${avg}`;
// rodom popup
const popup = document.getElementById('popup-message');
popup.classList.remove('hidden');
popup.classList.add('visible');
// po 3s paslepiam
setTimeout(() => {
  popup.classList.remove('visible');
  popup.classList.add('hidden');
}, 3000);