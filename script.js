const selectCategoria = document.querySelector("#categoria");
const inputValor = document.querySelector("#valor");
const btnFiltrar = document.querySelector("#filtrar");


const btnMenu = document.querySelector("#btn-Menu");
const menuLateral = document.querySelector("#menu-lateral");


btnMenu.addEventListener("click", () => {
    if (menuLateral.style.left === "" ||
        menuLateral.style.left === "-200px"
    ) {
        menuLateral.style.left = "0";
    } else {
        menuLateral.style.left = "-200px";
    }
});

const produto = [
    {
        imagem: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m9j6iipq72nt43",
        nome: "Manga Longa",
        valor: 70,
        categoria: 1
    },
    {
        imagem: "https://http2.mlstatic.com/D_NQ_NP_684110-MLB83773224084_042025-O-regata-uniforme-escolar-sesi-adulto-branca.webp",
        nome: "Regata",
        valor: 45,
        categoria: 2
    },
    {
        imagem: "https://malhariacleo.com.br/imgcache/597/1000x/uploads/597/product/photo_663e8de037f60.jpg.webp",
        nome: "Bermuda",
        valor: 60,
        categoria: 3
    },
];

const card = document.querySelector(".box");
const main = document.querySelector("main");

var valormaximo = 0
produto.forEach((produto) => {

    let novoCard = card.cloneNode(true);
    console.log(novoCard);

    novoCard.querySelector("img").src = produto.imagem;
    novoCard.querySelector(".nome").innerHTML = produto.nome
    novoCard.querySelector(".valor").innerHTML = "R$ " + produto.valor
    novoCard.querySelector(".categoria").innerHTML = produto.categoria

    main.appendChild(novoCard);

    if (produto.valor > valormaximo) {
        valormaximo = Math.round(produto.valor);
    }
});
inputValor.max = valormaximo;

const busca = document.querySelector("#busca");

busca.addEventListener("keyup", () => {
    console.log(main.childNodes.forEach((box) => {
        const conteudo = box.innerHTML;
        if (conteudo) {
            const nome = box.querySelector(".nome").innerHTML;
            if (nome.toLowerCase().includes(busca.value.toLowerCase())) {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        }
        // if(box.innerHTML.include(busca.value)) {
        // box.style.display = "block";
        // } else {
        // box.style.display = "none";
        // }
    }));
});

btnFiltrar.addEventListener("click", (event) => {
    event.preventDefault();

    const catSel = selectCategoria.value;
    const valSel = imputValor.value

    main.childNodes.forEach((box) => {
        if (box.innerHTML) {
            const catBox = box.querySelector(".categoria").innerHTML;
            const valbox = Number(box.querySelector(".valor").innerHTML.split(" ")[1]);
            //valbox -> ["R$, "400"];

            if
                (
                (catBox == catSel || catSel == 0)
                &&
                (valSel == 0 || valbox <= valSel)
            ) {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        }
    });
});





inputValor.addEventListener("change", () => {
    document.querySelector("#spVal").innerHTML = "R$ " + inputValor.value;
});