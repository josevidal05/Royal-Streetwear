document.addEventListener("DOMContentLoaded", function () {
  const productos = {
    "hoodie Fake Gods": {
      nombre: "Sudadera Fakegods",
      precio: "75€",
      imagenes: [
        "../imagenes/ropa/sudadera fg negra 1.png",
        "../imagenes/ropa/sudadera fg negra 2.png"
      ]
    },
    "Jordan 1 low": {
      nombre: "Air Jordan 1 low",
      precio: "140€",
      imagenes: [
        "../imagenes/zapatillas/jordan 1 low gris.png",
        "../imagenes/zapatillas/jordan 1 low gris 2.png",
        /*"../imagenes/zapatillas/jordan 1 low gris 3.png",
        "../imagenes/zapatillas/jordan 1 low gris 4.png",
        "../imagenes/zapatillas/jordan 1 low gris 5.png",
        "../imagenes/zapatillas/jordan 1 low gris 6.png"*/
        
      ]
    },
    "camiseta Nude Project": {
      nombre: "Camiseta Nude Project",
      precio: "45€",
      imagenes: [
        "../imagenes/ropa/camiseta blanca np.png",
        "../imagenes/ropa/camiseta blanca np 2.png"
      ]
    },
    "adidas Samba OG": {
      nombre: "Samba OG",
      precio: "120€",
      imagenes: [
        "../imagenes/zapatillas/samba.png",
        "../imagenes/zapatillas/samba 2.png",
        "../imagenes/zapatillas/samba 3.png",
        "../imagenes/zapatillas/samba 4.png",
        "../imagenes/zapatillas/samba 5.png",
        "../imagenes/zapatillas/samba 6.png",

      ]
    },
    "pantalon carpenter Cold Culture": {
      nombre: "Pantalones carpenter Cold Culture",
      precio: "79€",
      imagenes: [
        "../imagenes/ropa/pantalon carpenter cc negro.png",
        "../imagenes/ropa/pantalon carpenter cc negro 2.png"
      ]
    },
    "adidas Campus": {
      nombre: "Adidas Campus 00s",
      precio: "120€",
      imagenes: [
        "../imagenes/zapatillas/campus.png",
        "../imagenes/zapatillas/campus 2.png",
        "../imagenes/zapatillas/campus 3.png",
        "../imagenes/zapatillas/campus 4.png",
        "../imagenes/zapatillas/campus 5.png",
        "../imagenes/zapatillas/campus 6.png",
      ]
    },
    "New Balance 9060": {
      nombre: "New Balance 9060",
      precio: "190€",
      imagenes: [
        "../imagenes/zapatillas/nb 9060 negras.png",
        "../imagenes/zapatillas/nb 9060 negras 2.png"
      ]
    },
    "Jersey Scuffers": {
      nombre: "Jersey Scuffers",
      precio: "79€",
      imagenes: [
        "../imagenes/ropa/jersey blanco scuff.png",
        "../imagenes/ropa/jersey blanco scuff 2.png"
      ]
    },
    "new Balance 530": {
      nombre: "New Balance 530",
      precio: "120€",
      imagenes: [
        "../imagenes/zapatillas/nb 530.png",
        "../imagenes/zapatillas/nb 530 2.png"
      ]
    },
    "hoodie Scuffers granate": {
      nombre: "Sudadera Scuffers",
      precio: "69€",
      imagenes: [
        "../imagenes/ropa/sudadera granate scuff.png",
        "../imagenes/ropa/sudadera granate scuff 2.png"
      ]
    },
    "zip hoodie Fake Gods": {
      nombre: "Sudadera con zip Fakegods",
      precio: "75€",
      imagenes: [
        "../imagenes/ropa/sudadera cremallera fg.png",
        "../imagenes/ropa/sudadera cremallera fg 2.png",
        "../imagenes/ropa/sudadera cremallera fg 3.png",
        "../imagenes/ropa/sudadera cremallera fg 4.png",
        "../imagenes/ropa/sudadera cremallera fg 5.png",
        "../imagenes/ropa/sudadera cremallera fg 6.png",
        

      ]
    },
    "nike Dunk low cacao": {
      nombre: "Nike dunk low cacao",
      precio: "120€",
      imagenes: [
        "../imagenes/zapatillas/cacao 1.png",
        "../imagenes/zapatillas/cacao 2.png",
        "../imagenes/zapatillas/cacao 3.png",
        "../imagenes/zapatillas/cacao 4.png",
        "../imagenes/zapatillas/cacao 5.png",
        "../imagenes/zapatillas/cacao 6.png"

      ]
    },
    "hoodie Cold Culture": {
      nombre: "Sudadera Cold Culture",
      precio: "69€",
      imagenes: [
        "../imagenes/ropa/sudadera cc azul.png",
        "../imagenes/ropa/sudadera cc azul 2.png",
        "../imagenes/ropa/sudadera cc azul 3.png",
        "../imagenes/ropa/sudadera cc azul 4.png",
        "../imagenes/ropa/sudadera cc azul 5.png",
        "../imagenes/ropa/sudadera cc azul 6.png",
      ]
    },
    "camiseta Scuffers": {
      nombre: "Camiseta Scufferrs",
      precio: "39€",
      imagenes: [
        "../imagenes/ropa/camiseta negra scuff.png",
        "../imagenes/ropa/camiseta negra scuff 2.png",
        "../imagenes/ropa/camiseta negra scuff 3.png",
        "../imagenes/ropa/camiseta negra scuff 4.png",
        "../imagenes/ropa/camiseta negra scuff 5.png",
        "../imagenes/ropa/camiseta negra scuff 6.png"
      ]
    },
    "adidas Forum low Bad Bunny": {
      nombre: "Adidas forum low Bad Bunny",
      precio: "220€",
      imagenes: [
        "../imagenes/zapatillas/forum bbunny.png",
        "../imagenes/zapatillas/forum bbunny 2.png",
        "../imagenes/zapatillas/forum bbunny 3.png",
        "../imagenes/zapatillas/forum bbunny 4.png",
        "../imagenes/zapatillas/forum bbunny 5.png",
        "../imagenes/zapatillas/forum bbunny 6.png"
      ]
    },
    "pantalon Fake Gods": {
      nombre: "Pantalón Fakegods",
      precio: "79€",
      imagenes: [
        "../imagenes/ropa/pantalon fg.png",
        "../imagenes/ropa/pantalon fg 2.png",
        "../imagenes/ropa/pantalon fg 3.png",
        "../imagenes/ropa/pantalon fg 4.png",
        "../imagenes/ropa/pantalon fg 5.png",
        "../imagenes/ropa/pantalon fg 6.png",
      ]
    },
    "pantalon No Emotions": {
      nombre: "Pantalón de chandal No Emotions",
      precio: "75€",
      imagenes: [
        "../imagenes/ropa/NoE pants grises 1.png",
        "../imagenes/ropa/NoE pants grises 2.png",
        "../imagenes/ropa/NoE pants grises 3.png",
        "../imagenes/ropa/NoE pants grises 4.png",
        "../imagenes/ropa/NoE pants grises 5.png",
        "../imagenes/ropa/NoE pants grises 6.png",
      ]
    },
    "adiadas Spezial": {
      nombre: "Adidas spezial",
      precio: "120€",
      imagenes: [
        "../imagenes/zapatillas/adidas spezial azules 1.png",
        "../imagenes/zapatillas/adidas spezial azules 2.png",
        "../imagenes/zapatillas/adidas spezial azules 3.png",
        "../imagenes/zapatillas/adidas spezial azules 4.png",
        "../imagenes/zapatillas/adidas spezial azules 5.png",
        "../imagenes/zapatillas/adidas spezial azules 6.png",
      ]
    },
    "camiseta Two Jeys": {
      nombre: "Camiseta Two Jweys",
      precio: "45€",
      imagenes: [
        "../imagenes/ropa/camiseta 2j gris 1.png",
        "../imagenes/ropa/camiseta 2j gris 2.png",
        "../imagenes/ropa/camiseta 2j gris 3.png",
        "../imagenes/ropa/camiseta 2j gris 4.png",
        "../imagenes/ropa/camiseta 2j gris 5.png",
        "../imagenes/ropa/camiseta 2j gris 6.png"
      ]
    },
    "asics Gel Kayano 14": {
      nombre: "Asics Gel Kayano 14",
      precio: "160€",
      imagenes: [
        "../imagenes/zapatillas/asics gel kayano 14 1.png",
        "../imagenes/zapatillas/asics gel kayano 14 2.png",
        "../imagenes/zapatillas/asics gel kayano 14 3.png",
        "../imagenes/zapatillas/asics gel kayano 14 4.png",
        "../imagenes/zapatillas/asics gel kayano 14 5.png",
        "../imagenes/zapatillas/asics gel kayano 14 6.png"
      ]
    },
    "zip hoodie Two Jeys gris": {
      nombre: "Sudadera con zip Two Jeys",
      precio: "135€",
      imagenes: [
        "../imagenes/ropa/sudadera zip 2j gris 1.png",
        "../imagenes/ropa/sudadera zip 2j gris 2.png",
        "../imagenes/ropa/sudadera zip 2j gris 3.png",
        "../imagenes/ropa/sudadera zip 2j gris 4.png",
        "../imagenes/ropa/sudadera zip 2j gris 5.png",
        "../imagenes/ropa/sudadera zip 2j gris 6.png"
      ]
    },
    "asics Gel NYC": {
      nombre: "Asics Gel-NYC",
      precio: "150€",
      imagenes: [
        "../imagenes/zapatillas/asics nyc grises 1.png",
        "../imagenes/zapatillas/asics nyc grises 2.png",
        "../imagenes/zapatillas/asics nyc grises 3.png",
        "../imagenes/zapatillas/asics nyc grises 4.png",
        "../imagenes/zapatillas/asics nyc grises 5.png",
        "../imagenes/zapatillas/asics nyc grises 6.png"
      ]
    },
    "nike Air Max 1": {
      nombre: "Nike Air Max 1",
      precio: "190€",
      imagenes: [
        "../imagenes/zapatillas/air max 1 1.png",
        "../imagenes/zapatillas/air max 1 2.png",
        "../imagenes/zapatillas/air max 1 3.png",
        "../imagenes/zapatillas/air max 1 4.png",
        "../imagenes/zapatillas/air max 1 5.png",
        "../imagenes/zapatillas/air max 1 6.png"
      ]
    },
    "nike P6000": {
      nombre: "Nike p6000",
      precio: "79€",
      imagenes: [
        "../imagenes/zapatillas/nike p6000 rojas 5.png",
        "../imagenes/zapatillas/nike p6000 rojas 6.png",
        "../imagenes/zapatillas/nike p6000 rojas 3.png",
        "../imagenes/zapatillas/nike p6000 rojas 4.png",
      ]
    },
    "salomon XT-6": {
      nombre: "Salomon XT-6",
      precio: "200€",
      imagenes: [
        "../imagenes/zapatillas/salomon XT-6 1.png",
        "../imagenes/zapatillas/salomon XT-6 2.png",
        "../imagenes/zapatillas/salomon XT-6 3.png",
        "../imagenes/zapatillas/salomon XT-6 4.png",
        "../imagenes/zapatillas/salomon XT-6 5.png",
        "../imagenes/zapatillas/salomon XT-6 6.png"
      ]
    },
    "nike Shox": {
      nombre: "Nike Shox TL",
      precio: "170€",
      imagenes: [
        "../imagenes/zapatillas/nike shox negras 1.png",
        "../imagenes/zapatillas/nike shox negras 2.png",
        "../imagenes/zapatillas/nike shox negras 3.png",
        "../imagenes/zapatillas/nike shox negras 4.png",
        "../imagenes/zapatillas/nike shox negras 5.png",
        "../imagenes/zapatillas/nike shox negras 6.png"
      ]
    },
    "longsleeve No Emotions": {
      nombre: "Longsleeve No Emotions",
      precio: "69€",
      imagenes: [
        "../imagenes/ropa/longsleeve NoE azul 1.png",
        "../imagenes/ropa/longsleeve NoE azul 2.png",
        "../imagenes/ropa/longsleeve NoE azul 3.png",
        "../imagenes/ropa/longsleeve NoE azul 4.png",
        "../imagenes/ropa/longsleeve NoE azul 5.png",
        "../imagenes/ropa/longsleeve NoE azul 6.png"
      ]
    },
    "nike Air vomero 5": {
      nombre: "Nike Vomero 5",
      precio: "160€",
      imagenes: [
        "../imagenes/zapatillas/nike air vomero 5 1.png",
        "../imagenes/zapatillas/nike air vomero 5 2.png",
        "../imagenes/zapatillas/nike air vomero 5 3.png",
        "../imagenes/zapatillas/nike air vomero 5 4.png",
        "../imagenes/zapatillas/nike air vomero 5 5.png",
        "../imagenes/zapatillas/nike air vomero 5 6.png"
      ]
    },
    "hoodie No Emotions marron": {
      nombre: "Sudadera No Emotions",
      precio: "88€",
      imagenes: [
        "../imagenes/ropa/sudadera NoE marron 1.png",
        "../imagenes/ropa/sudadera NoE marron 2.png",
        "../imagenes/ropa/sudadera NoE marron 3.png",
        "../imagenes/ropa/sudadera NoE marron 4.png",
        "../imagenes/ropa/sudadera NoE marron 5.png",
        "../imagenes/ropa/sudadera NoE marron 6.png",
      ]
    },
    "pantalon Scuffers": {
      nombre: "Pantalón Scuffers",
      precio: "89€",
      imagenes: [
        "../imagenes/ropa/pantalon azul scuff 1.png",
        "../imagenes/ropa/pantalon azul scuff 2.png",
        "../imagenes/ropa/pantalon azul scuff 3.png",
        "../imagenes/ropa/pantalon azul scuff 4.png",
        "../imagenes/ropa/pantalon azul scuff 5.png",
        "../imagenes/ropa/pantalon azul scuff 6.png"
      ]
    },
    "Nike ReactX Rejuvene8": {
      nombre: "Nike ReactX Rejuvene8",
      precio: "60€",
      imagenes: [
        "../imagenes/zapatillas/chanclas Nike ReactX Rejuven8 1.png",
        "../imagenes/zapatillas/chanclas Nike ReactX Rejuven8 2.png",
        "../imagenes/zapatillas/chanclas Nike ReactX Rejuven8 3.png",
        "../imagenes/zapatillas/chanclas Nike ReactX Rejuven8 4.png",
        "../imagenes/zapatillas/chanclas Nike ReactX Rejuven8 5.png",
        "../imagenes/zapatillas/chanclas Nike ReactX Rejuven8 6.png"
      ]
    },
    "camisa Two Jeys azul": {
      nombre: "Camisa Two Jeys",
      precio: "115€",
      imagenes: [
        "../imagenes/ropa/camisa azul 2j 1.png",
        "../imagenes/ropa/camisa azul 2j 2.png",
        "../imagenes/ropa/camisa azul 2j 3.png",
        "../imagenes/ropa/camisa azul 2j 4.png",
        "../imagenes/ropa/camisa azul 2j 5.png",
        "../imagenes/ropa/camisa azul 2j 6.png"
      ]
    },
    "nike Spiridon": {
      nombre: "Nike Spiridon",
      precio: "160€",
      imagenes: [
        "../imagenes/zapatillas/nike spiridon 1.png",
        "../imagenes/zapatillas/nike spiridon 2.png",
        "../imagenes/zapatillas/nike spiridon 3.png",
        "../imagenes/zapatillas/nike spiridon 4.png",
        "../imagenes/zapatillas/nike spiridon 5.png",
        "../imagenes/zapatillas/nike spiridon 6.png",
      ]
    },
    "gorra New Era": {
      nombre: "Gorra New Era",
      precio: "44€",
      imagenes: [
        "../imagenes/ropa/gorra NE gris 1.png",
        "../imagenes/ropa/gorra NE gris 2.png",
        "../imagenes/ropa/gorra NE gris 3.png",
        "../imagenes/ropa/gorra NE gris 4.png",
        "../imagenes/ropa/gorra NE gris 5.png",
        "../imagenes/ropa/gorra NE gris 6.png",
      ]
    },
    "puma Speedcat": {
      nombre: "Puma speedcat",
      precio: "110€",
      imagenes: [
        "../imagenes/zapatillas/Puma Speedcat 1.png",
        "../imagenes/zapatillas/Puma Speedcat 2.png",
        "../imagenes/zapatillas/Puma Speedcat 3.png",
        "../imagenes/zapatillas/Puma Speedcat 4.png",
        "../imagenes/zapatillas/Puma Speedcat 5.png",
        "../imagenes/zapatillas/Puma Speedcat 6.png",
      ]
    },
    "new balance 1906R": {
      nombre: "New Balance 1906",
      precio: "160€",
      imagenes: [
        "../imagenes/zapatillas/Nb 1906R 1.png",
        "../imagenes/zapatillas/Nb 1906R 2.png",
        "../imagenes/zapatillas/Nb 1906R 3.png",
        "../imagenes/zapatillas/Nb 1906R 4.png",
        "../imagenes/zapatillas/Nb 1906R 5.png",
        "../imagenes/zapatillas/Nb 1906R 6.png",
      ]
    },
    "sudadera Two Jeys": {
      nombre: "Sudadera Two Jeys",
      precio: "130€",
      imagenes: [
        "../imagenes/ropa/sudadera 2j azul 1.png",
        "../imagenes/ropa/sudadera 2j azul 2.png",
        "../imagenes/ropa/sudadera 2j azul 3.png",
        "../imagenes/ropa/sudadera 2j azul 4.png",
        "../imagenes/ropa/sudadera 2j azul 5.png",
        "../imagenes/ropa/sudadera 2j azul 6.png",
      ]
    },
    "puma Palermo": {
      nombre: "Puma Palermo",
      precio: "90€",
      imagenes: [
        "../imagenes/zapatillas/Puma Palermo 1.png",
        "../imagenes/zapatillas/Puma Palermo 2.png",
        "../imagenes/zapatillas/Puma Palermo 3.png",
        "../imagenes/zapatillas/Puma Palermo 4.png",
        "../imagenes/zapatillas/Puma Palermo 5.png",
        "../imagenes/zapatillas/Puma Palermo 6.png"
      ]
    },
    "pantalon No Emotions estampado": {
      nombre: "Pantalon No Emotions",
      precio: "85€",
      imagenes: [
        "../imagenes/ropa/pantalon NoE negro 1.png",
        "../imagenes/ropa/pantalon NoE negro 2.png",
        "../imagenes/ropa/pantalon NoE negro 1.png",
        "../imagenes/ropa/pantalon NoE negro 2.png",
        "../imagenes/ropa/pantalon NoE negro 1.png",
        "../imagenes/ropa/pantalon NoE negro 2.png",
      ]
    },
    "hoodie half zip Two Jeys": {
      nombre: "Sudadera half zip Two Jeys",
      precio: "120€",
      imagenes: [
        "../imagenes/ropa/sudadera half zip 2j negra 1.png",
        "../imagenes/ropa/sudadera half zip 2j negra 2.png",
        "../imagenes/ropa/sudadera half zip 2j negra 3.png",
        "../imagenes/ropa/sudadera half zip 2j negra 4.png",
        "../imagenes/ropa/sudadera half zip 2j negra 5.png",
        "../imagenes/ropa/sudadera half zip 2j negra 6.png",
      ]
    },
    "Air Max 95": {
      nombre: "Air Max 95",
      precio: "190€",
      imagenes: [
        "../imagenes/zapatillas/air max 95 1.png",
        "../imagenes/zapatillas/air max 95 2.png",
        "../imagenes/zapatillas/air max 95 3.png",
        "../imagenes/zapatillas/air max 95 4.png",
        "../imagenes/zapatillas/air max 95 5.png",
        "../imagenes/zapatillas/air max 95 6.png",
      ]
    },
    "zip hoodie Scuffers": {
      nombre: "Sudadera con zip Scuffers",
      precio: "72€",
      imagenes: [
        "../imagenes/ropa/sudadera con zip azul marino scuff 1.png",
        "../imagenes/ropa/sudadera con zip azul marino scuff 2.png",
        "../imagenes/ropa/sudadera con zip azul marino scuff 3.png",
        "../imagenes/ropa/sudadera con zip azul marino scuff 4.png",
        "../imagenes/ropa/sudadera con zip azul marino scuff 5.png",
        "../imagenes/ropa/sudadera con zip azul marino scuff 6.png",
      ]
    },
    "hoodie Scuffers": {
      nombre: "Sudadera Scuffers",
      precio: "69€",
      imagenes: [
        "../imagenes/ropa/sudadera scuff negra 1.png",
        "../imagenes/ropa/sudadera scuff negra 2.png",
        "../imagenes/ropa/sudadera scuff negra 3.png",
        "../imagenes/ropa/sudadera scuff negra 4.png",
        "../imagenes/ropa/sudadera scuff negra 5.png",
        "../imagenes/ropa/sudadera scuff negra 6.png"
      ]
    },
    "adidas Response CL": {
      nombre: "Adidas Response CL",
      precio: "130€",
      imagenes: [
        "../imagenes/zapatillas/adidas response CL 1.png",
        "../imagenes/zapatillas/adidas response CL 2.png",
        "../imagenes/zapatillas/adidas response CL 3.png",
        "../imagenes/zapatillas/adidas response CL 4.png",
        "../imagenes/zapatillas/adidas response CL 5.png",
        "../imagenes/zapatillas/adidas response CL 6.png",
      ]
    },
    "hoodie Scuffers naranja": {
      nombre: "Sudadera Scuffers",
      precio: "69€",
      imagenes: [
        "../imagenes/ropa/sudadera naranja scuff 1.png",
        "../imagenes/ropa/sudadera naranja scuff 2.png",
        "../imagenes/ropa/sudadera naranja scuff 3.png",
        "../imagenes/ropa/sudadera naranja scuff 4.png",
        "../imagenes/ropa/sudadera naranja scuff 5.png",
        "../imagenes/ropa/sudadera naranja scuff 6.png"
      ]
    },
    "camisa EME Studios": {
      nombre: "Camisa Eme Studios",
      precio: "72€",
      imagenes: [
        "../imagenes/ropa/camisa EME 1.png",
        "../imagenes/ropa/camisa EME 2.png",
        "../imagenes/ropa/camisa EME 3.png",
        "../imagenes/ropa/camisa EME 4.png",
        "../imagenes/ropa/camisa EME 5.png",
        "../imagenes/ropa/camisa EME 6.png"
      ]
    },
    "puma Reflective": {
      nombre: "Puma Reflective",
      precio: "130€",
      imagenes: [
        "../imagenes/zapatillas/Puma Reflective 1.png",
        "../imagenes/zapatillas/Puma Reflective 2.png",
        "../imagenes/zapatillas/Puma Reflective 3.png",
        "../imagenes/zapatillas/Puma Reflective 4.png",
        "../imagenes/zapatillas/Puma Reflective 5.png",
        "../imagenes/zapatillas/Puma Reflective 6.png"
      ]
    },
    "camiseta Cold Culture": {
      nombre: "Camiseta Cold Culture",
      precio: "45€",
      imagenes: [
        "../imagenes/ropa/camiseta cc gris 1.png",
        "../imagenes/ropa/camiseta cc gris 2.png",
        "../imagenes/ropa/camiseta cc gris 3.png",
        "../imagenes/ropa/camiseta cc gris 4.png",
        "../imagenes/ropa/camiseta cc gris 5.png",
        "../imagenes/ropa/camiseta cc gris 6.png"
      ]
    },
    "jorts Cold Culture": {
      nombre: "Jorts Cold Culture",
      precio: "69€",
      imagenes: [
        "../imagenes/ropa/jorts azules cc 1.png",
        "../imagenes/ropa/jorts azules cc 2.png",
        "../imagenes/ropa/jorts azules cc 3.png",
        "../imagenes/ropa/jorts azules cc 4.png",
        "../imagenes/ropa/jorts azules cc 5.png",
        "../imagenes/ropa/jorts azules cc 6.png"
      ]
    },
    "camiseta Fake Gods limon": {
      nombre: "Camiseta Fake Gods",
      precio: "40€",
      imagenes: [
        "../imagenes/ropa/cami fg azul limones 1.png",
        "../imagenes/ropa/cami fg azul limones 2.png",
        "../imagenes/ropa/cami fg azul limones 3.png",
        "../imagenes/ropa/cami fg azul limones 4.png",
        "../imagenes/ropa/cami fg azul limones 5.png",
        "../imagenes/ropa/cami fg azul limones 6.png"
      ]
    },
    "camiseta Cold Culture espiral": {
      nombre: "Camiseta Cold Culture",
      precio: "39€",
      imagenes: [
        "../imagenes/ropa/camiseta negra cc 1.png",
        "../imagenes/ropa/camiseta negra cc 2.png",
        "../imagenes/ropa/camiseta negra cc 3.png",
        "../imagenes/ropa/camiseta negra cc 4.png",
        "../imagenes/ropa/camiseta negra cc 5.png",
        "../imagenes/ropa/camiseta negra cc 6.png"
      ]
    },
    "nike V2K Run": {
      nombre: "Nike V2K Run",
      precio: "120€",
      imagenes: [
        "../imagenes/zapatillas/v2k run 1.png",
        "../imagenes/zapatillas/v2k run 2.png",
        "../imagenes/zapatillas/v2k run 3.png",
        "../imagenes/zapatillas/v2k run 4.png",
        "../imagenes/zapatillas/v2k run 5.png",
        "../imagenes/zapatillas/v2k run 6.png"
      ]
    },
    "nike US Force 1": {
      nombre: "Nike Us Force 1",
      precio: "130€",
      imagenes: [
        "../imagenes/zapatillas/US force 1 1.png",
        "../imagenes/zapatillas/US force 1 2.png",
        "../imagenes/zapatillas/US force 1 3.png",
        "../imagenes/zapatillas/US force 1 4.png",
        "../imagenes/zapatillas/US force 1 5.png",
        "../imagenes/zapatillas/US force 1 6.png"
      ]
    },
    "nike Cortez": {
      nombre: "Nike Cortez",
      precio: "90€",
      imagenes: [
        "../imagenes/zapatillas/cortez 1.png",
        "../imagenes/zapatillas/cortez 2.png",
        "../imagenes/zapatillas/cortez 3.png",
        "../imagenes/zapatillas/cortez 4.png",
        "../imagenes/zapatillas/cortez 5.png",
        "../imagenes/zapatillas/cortez 6.png"
      ]
    },
    "jersey EME Studios": {
      nombre: "Jersey Eme Studios",
      precio: "89€",
      imagenes: [
        "../imagenes/ropa/jersey gris oscuro EME 1.png",
        "../imagenes/ropa/jersey gris oscuro EME 2.png",
        "../imagenes/ropa/jersey gris oscuro EME 3.png",
        "../imagenes/ropa/jersey gris oscuro EME 4.png",
        "../imagenes/ropa/jersey gris oscuro EME 5.png",
        "../imagenes/ropa/jersey gris oscuro EME 6.png"
      ]
    },
    "sudadera Fake Gods": {
      nombre: "Sudadera Fake Gods",
      precio: "78€",
      imagenes: [
        "../imagenes/ropa/sudadera gris basica logo fg 1.png",
        "../imagenes/ropa/sudadera gris basica logo fg 2.png",
        "../imagenes/ropa/sudadera gris basica logo fg 3.png",
        "../imagenes/ropa/sudadera gris basica logo fg 4.png",
        "../imagenes/ropa/sudadera gris basica logo fg 5.png",
        "../imagenes/ropa/sudadera gris basica logo fg 6.png"
      ]
    },
    "camisa Nude Project": {
      nombre: "Camisa Nude Project",
      precio: "79€",
      imagenes: [
        "../imagenes/ropa/camisa marron np 1.png",
        "../imagenes/ropa/camisa marron np 2.png",
        "../imagenes/ropa/camisa marron np 3.png",
        "../imagenes/ropa/camisa marron np 4.png",
        "../imagenes/ropa/camisa marron np 5.png",
        "../imagenes/ropa/camisa marron np 6.png"
      ]
    },
    "Jordan 4 white cement": {
      nombre: "Air Jordan 4",
      precio: "210€",
      imagenes: [
        "../imagenes/zapatillas/jordan 4 white cement 1.png",
        "../imagenes/zapatillas/jordan 4 white cement 2.png",
        "../imagenes/zapatillas/jordan 4 white cement 3.png",
        "../imagenes/zapatillas/jordan 4 white cement 4.png",
        "../imagenes/zapatillas/jordan 4 white cement 5.png",
        "../imagenes/zapatillas/jordan 4 white cement 6.png"

      ]
    },
    "camiseta Nude Project roja": {
      nombre: "Camiseta Nude Project",
      precio: "45€",
      imagenes: [
        "../imagenes/ropa/camiseta roja np 1.png",
        "../imagenes/ropa/camiseta roja np 2.png",
        "../imagenes/ropa/camiseta roja np 3.png",
        "../imagenes/ropa/camiseta roja np 4.png",
        "../imagenes/ropa/camiseta roja np 5.png",
        "../imagenes/ropa/camiseta roja np 6.png"
      ]
    },
    "adidas Samba XLG": {
      nombre: "Adidas Samba XLG",
      precio: "130€",
      imagenes: [
        "../imagenes/zapatillas/samba XLG 1.png",
        "../imagenes/zapatillas/samba XLG 2.png",
        "../imagenes/zapatillas/samba XLG 3.png",
        "../imagenes/zapatillas/samba XLG 5.png",
        "../imagenes/zapatillas/samba XLG 5.png",
        "../imagenes/zapatillas/samba XLG 6.png"
      ]
    },
    "Jorts Nude Project": {
      nombre: "Jorts Nude Project",
      precio: "89€",
      imagenes: [
        "../imagenes/ropa/jorts negros np 1.png",
        "../imagenes/ropa/jorts negros np 2.png",
        "../imagenes/ropa/jorts negros np 3.png",
        "../imagenes/ropa/jorts negros np 4.png",
        "../imagenes/ropa/jorts negros np 5.png",
        "../imagenes/ropa/jorts negros np 6.png"
      ]
    },
    "Jersey roto EME Studios": {
      nombre: "Jersey roto Eme Studios",
      precio: "89€",
      imagenes: [
        "../imagenes/ropa/jersey roto verde EME 1.png",
        "../imagenes/ropa/jersey roto verde EME 2.png",
        "../imagenes/ropa/jersey roto verde EME 3.png",
        "../imagenes/ropa/jersey roto verde EME 4.png",
        "../imagenes/ropa/jersey roto verde EME 5.png",
        "../imagenes/ropa/jersey roto verde EME 6.png"
      ]
    },
    "Air Jordan 1 high": {
      nombre: "Air Jordan 1 high",
      precio: "190€",
      imagenes: [
        "../imagenes/zapatillas/jordan 1 high 1.png",
        "../imagenes/zapatillas/jordan 1 high 2.png",
        "../imagenes/zapatillas/jordan 1 high 3.png",
        "../imagenes/zapatillas/jordan 1 high 4.png",
        "../imagenes/zapatillas/jordan 1 high 5.png",
        "../imagenes/zapatillas/jordan 1 high 6.png"
      ]
    },
    "camiseta Scuffers amarilla": {
      nombre: "Camiseta Scuffers",
      precio: "45€",
      imagenes: [
        "../imagenes/ropa/camiseta scuff amarilla 1.png",
        "../imagenes/ropa/camiseta scuff amarilla 2.png",
        "../imagenes/ropa/camiseta scuff amarilla 3.png",
        "../imagenes/ropa/camiseta scuff amarilla 4.png",
        "../imagenes/ropa/camiseta scuff amarilla 5.png",
        "../imagenes/ropa/camiseta scuff amarilla 6.png"
      ]
    }
  };

  // --- OBTENER PRODUCTO SELECCIONADO ---
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "cacao";
  const producto = productos[id];

  // --- MOSTRAR DATOS DEL PRODUCTO ---
  if (producto) {
    // Nombre y precio
    const nombreElem = document.querySelector(".nombre-producto");
    const precioElem = document.querySelector(".precio-producto");
    if (nombreElem) nombreElem.textContent = producto.nombre;
    if (precioElem) precioElem.textContent = producto.precio;

    // Imagen principal
    const imgPrincipal = document.querySelector("#imagenPrincipal img");
    if (imgPrincipal) imgPrincipal.src = producto.imagenes[0];

    // Miniaturas verticales y horizontales
    const vistasV = document.querySelector(".vistasV");
    const vistasH = document.querySelector(".vistasH");
    if (vistasV) vistasV.innerHTML = "";
    if (vistasH) vistasH.innerHTML = "";
    producto.imagenes.forEach((img, i) => {
      if (vistasV) vistasV.innerHTML += `<img src="${img}" class="imgS" alt="v${i + 1}" onclick="cambiarImagen('${img}')">`;
      if (vistasH) vistasH.innerHTML += `<img src="${img}" class="imgS" alt="h${i + 1}" onclick="cambiarImagen('${img}')">`;
    });

    // Colores
    const coloresDiv = document.querySelector(".colores");
    if (coloresDiv && producto.colores) {
      coloresDiv.innerHTML = "";
      producto.colores.forEach((img, i) => {
        coloresDiv.innerHTML += `<img src="${img}" alt="color${i + 1}" onclick="cambiarImagen('${img}')">`;
      });
    }
  } else {
    // Si no existe el producto
    const imgPrincipal = document.querySelector("#imagenPrincipal img");
    if (imgPrincipal) imgPrincipal.src = "";
    const nombreElem = document.querySelector(".nombre-producto");
    if (nombreElem) nombreElem.textContent = "Producto no encontrado";
    const precioElem = document.querySelector(".precio-producto");
    if (precioElem) precioElem.textContent = "";
    const vistasV = document.querySelector(".vistasV");
    if (vistasV) vistasV.innerHTML = "";
    const vistasH = document.querySelector(".vistasH");
    if (vistasH) vistasH.innerHTML = "";
    const coloresDiv = document.querySelector(".colores");
    if (coloresDiv) coloresDiv.innerHTML = "";
  }

  // --- SELECCIÓN DE TALLAS ---
  const tallas = document.querySelectorAll('.talla');
  const botonCesta = document.getElementById('carrito');
  if (tallas && botonCesta) {
    tallas.forEach((boton) => {
      boton.addEventListener('click', () => {
        tallas.forEach((btn) => btn.classList.remove('selected'));
        boton.classList.add('selected');
        botonCesta.disabled = false;
      });
    });
  }

  // --- CAMBIAR IMAGEN PRINCIPAL DESDE MINIATURAS ---
  window.cambiarImagen = function (imagen) {
    const imgPrincipal = document.querySelector(".principal");
    if (imgPrincipal) imgPrincipal.src = imagen;
  };

  // --- MARCAR MINIATURA SELECCIONADA ---
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('imgS')) {
      document.querySelectorAll('.imgS').forEach(img => img.classList.remove('selected'));
      e.target.classList.add('selected');
    }
  })
});



