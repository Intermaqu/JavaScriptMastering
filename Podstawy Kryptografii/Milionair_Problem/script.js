function is_prime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

const findHugePrime = (startingNumber) => {
  while (true) {
    if (is_prime(startingNumber)) return startingNumber;
    startingNumber++;
  }
};

function gcd(num1, num2) {
  while (num2) {
    let tmp = num2;
    num2 = num1 % num2;
    num1 = tmp;
  }
  return num1;
}

function generateE(phi) {
  for (let i = 2; i < phi; i++) {
    if (is_prime(i) && gcd(phi, i) == 1) {
      return i;
    }
  }
}

function powerAndModulo(base, exponent, modulo) {
  let c = 1;
  for (let i = 0; i < exponent; i++) {
    c = (c * base) % modulo;
  }
  return c;
}

const fixD = (e, d, phi) => {
  while (true) {
    if ((e * d - 1) % phi === 0) {
      return d;
    } else {
      d += 1;
    }
  }
};

const crypt = (message, alphabet, e, n) => {
  message = message.toLowerCase().split("");
  let crypted = [];
  for (letter of message) {
    crypted.push(powerAndModulo(alphabet.indexOf(letter), e, n));
  }

  return crypted;
};

const encrypt = (crypted, alphabet, d, n) => {
  let decrypted = [];
  for (cryptedNumber of crypted) {
    decrypted.push(alphabet[powerAndModulo(cryptedNumber, d, n)]);
  }

  return decrypted.join("");
};

const apolonia = () => {
  console.log("%cApolonia", "color: #f00");
};

const bogus = () => {
  console.log("%cBoguś", "color: #00f");
};

const main = () => {
  console.clear()
  const I = document.getElementById("p1").value;
  const J = document.getElementById("p2").value;
  console.log("Apolonia: ", I);
  console.log("Bogus: ", J);

  const M = 500;
  const p = findHugePrime(100);
  const q = findHugePrime(110);
  const n = q * p;
  const phi = (q - 1) * (p - 1);
  //   const alphabet = "abcdefghijklmnopqrstuvwxyz";
  //   let message = "Politechnika";

  // Apolonia
  let Apol_public_e = generateE(phi);
  let Apol_private_d = 2;
  Apol_private_d = fixD(Apol_public_e, Apol_private_d, phi);

  apolonia();
  console.log(`d: ${Apol_private_d} \ne: ${Apol_public_e}`);

  // Boguś
  bogus();
  const x = Math.floor(Math.random() * 100);
  console.log(`Random number x: ${x}`);
  const C = powerAndModulo(x, Apol_public_e, n);
  const m = C - J + 1;

  // Apolonia
  apolonia();
  Y = [];
  for (let j = 1; j <= M; j++) {
    Y.push(powerAndModulo(m + j - 1, Apol_private_d, n));
  }
  console.log(`CHECH: Yj === x?  ${Y[J - 1]} === ${x}`);
  Z = [];
  for (let item of Y) {
    Z.push(item % p);
  }

  //   const hash = {}

  //   for(let item of Z){
  //     if(hash.hasOwnProperty(item)){
  //         hash[item] += 1
  //     } else {
  //         hash[item] = 1
  //     }
  //   }

  //   console.log(hash)

  console.log(`CHECK Zj ${Z[J - 1]}`);

  console.log("Incrementing");
  for (let j = I - 1; j < M; j++) {
    Z[j] += 1;
  }

  bogus();
  console.log(`Wj = ${Z[J - 1]}, x = ${x}, x%p = ${x % p}`);
  if (Z[J - 1] == x % p) console.log("%cApolonia ma więcej", "color: green");
  else console.log("%cBoguś ma więcej", "color: green");

  //   const crypted = crypt(message, alphabet, e, n)
  //   console.log(`crypted: ${crypted.join(" ")}`)

  //   const encrypted = encrypt(crypted, alphabet, d, n)
  //   console.log(`encrypted: ${encrypted}`)
};

const button = document.getElementById("button")

button.addEventListener("click", main);

// main();
