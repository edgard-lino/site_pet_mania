const catalogo = [
    {
        setor: 'alimentacao',
        codigo: '001',
        nome: 'Ração Gatos Castrados Salmão',
        marca: 'Golden',
        preco: 29.90
        imagem: './img/imagem-001.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'alimentacao',
        codigo: '002',
        nome: 'Ração Gatos Adultos Frango e Carne',
        marca: 'GranPlus Choice',
        preco: 147.90
        imagem: './img/imagem-002.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'alimentacao',
        codigo: '003',
        nome: 'Ração Seleção Natural Gatos Castrados',
        marca: 'Golden',
        preco: 28.90
        imagem: './img/imagem-003.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'alimentacao',
        codigo: '004',
        nome: 'Ração Úmida Sachê Frango',
        marca: 'Whiskas',
        preco: 2.91
        imagem: './img/imagem-004.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'alimentacao',
        codigo: '005',
        nome: 'Ração Úmida Gourmet',
        marca: 'Premier',
        preco: 6.99
        imagem: './img/imagem-005.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'alimentacao',
        codigo: '006',
        nome: 'Ração Úmida Gatos Adultos',
        marca: 'Friskies',
        preco: 3.39
        imagem: './img/imagem-006.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'alimentacao',
        codigo: '007',
        nome: 'Ração Úmida Demi Glace',
        marca: 'Fancy Feast',
        preco: 6.29
        imagem: './img/imagem-007.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'alimentacao',
        codigo: '008',
        nome: 'Ração Fresh Meat Cães',
        marca: 'Fórmula Natural',
        preco: 64.90
        imagem: './img/imagem-008.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'alimentacao',
        codigo: '009',
        nome: 'Ração Úmida Panelinha de Carne',
        marca: 'Pet Delícia',
        preco: 17.99
        imagem: './img/imagem-009.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'alimentacao',
        codigo: '010',
        nome: 'Ração Cães Adultos Frango e Carne',
        marca: 'Golden',
        preco: 154.90
        imagem: './img/imagem-010.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'alimentacao',
        codigo: '011',
        nome: 'Ração Cães Adultos Frango e Carne',
        marca: 'GranPlus',
        preco: 109.90
        imagem: './img/imagem-011.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'alimentacao',
        codigo: '012',
        nome: 'Ração Adultos Carne e Frango',
        marca: 'Origens',
        preco: 144.90
        imagem: './img/imagem-012.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'alimentacao',
        codigo: '013',
        nome: 'Ração Cães Adultos Raças Pequenas',
        marca: 'Golden',
        preco: 20.90
        imagem: './img/imagem-013.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'alimentacao',
        codigo: '014',
        nome: 'Ração Cães Adultos Abóbora',
        marca: 'Premier',
        preco: 42.90
        imagem: './img/imagem-014.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'acessorios',
        codigo: '015',
        nome: 'Pote Baby Cat',
        marca: 'Bandeirante',
        preco: 15.21
        imagem: './img/imagem-015.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'acessorios',
        codigo: '016',
        nome: 'Medidor de Ração',
        marca: 'Sanremo',
        preco: 9.90
        imagem: './img/imagem-016.jpg'
        gato: true,
        cao: true,
    },
    {
        setor: 'acessorios',
        codigo: '017',
        nome: 'Fonte Bebedouro Mini',
        marca: 'Aqua',
        preco: 139.90
        imagem: './img/imagem-017.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'acessorios',
        codigo: '018',
        nome: 'Comedouro de Inox',
        marca: 'Flicks',
        preco: 69.90
        imagem: './img/imagem-018.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'acessorios',
        codigo: '019',
        nome: 'Fonte Bebedouro',
        marca: 'Durapets',
        preco: 199.99
        imagem: './img/imagem-019.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'acessorios',
        codigo: '020',
        nome: 'Filtro Refil para Fonte',
        marca: 'Furacão Pet',
        preco: 13.90
        imagem: './img/imagem-020.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'acessorios',
        codigo: '021',
        nome: 'Bebedouro Automático',
        marca: 'Alvorada',
        preco: 39.90
        imagem: './img/imagem-021.jpg'
        gato: true,
        cao: true,
    },
    {
        setor: 'acessorios',
        codigo: '022',
        nome: 'Capa de Chuva azul',
        marca: 'Bichinho Chic',
        preco: 43.90
        imagem: './img/imagem-022.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'acessorios',
        codigo: '023',
        nome: 'Meia Estrelas Vermelha',
        marca: 'HomePet',
        preco: 20.90
        imagem: './img/imagem-023.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'acessorios',
        codigo: '024',
        nome: 'Bandana Donuts',
        marca: 'Emporium',
        preco: 29.90
        imagem: './img/imagem-024.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'acessorios',
        codigo: '025',
        nome: 'Cama Ossinho Azul',
        marca: 'Flicks',
        preco: 159.90
        imagem: './img/imagem-025.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'acessorios',
        codigo: '026',
        nome: 'Cama Paris Preto',
        marca: 'Bichinho Chic',
        preco: 59.30
        imagem: './img/imagem-026.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'acessorios',
        codigo: '027',
        nome: 'Cama Cupcake',
        marca: 'Emporium',
        preco: 159.90
        imagem: './img/imagem-027.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'acessorios',
        codigo: '028',
        nome: 'Casinha Pinus',
        marca: 'Mokoi',
        preco: 95.90
        imagem: './img/imagem-028.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'brinquedos',
        codigo: '029',
        nome: 'Brinquedo Interativo Labirinto Verde',
        marca: 'Pet Games',
        preco: 47.90
        imagem: './img/imagem-029.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'brinquedos',
        codigo: '030',
        nome: 'Varinha para Gatos com Plumas',
        marca: 'Meow & Me',
        preco: 21.90
        imagem: './img/imagem-030.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'brinquedos',
        codigo: '031',
        nome: 'Arranhador Rampa',
        marca: 'Furacão Pet',
        preco: 74.90
        imagem: './img/imagem-031.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'brinquedos',
        codigo: '032',
        nome: 'Brinquedo Bolinha Catnip',
        marca: 'Jambo',
        preco: 22.90
        imagem: './img/imagem-032.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'brinquedos',
        codigo: '033',
        nome: 'Brinquedo Pelúcia Rato Catnip',
        marca: 'Flicks',
        preco: 21.90
        imagem: './img/imagem-033.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'brinquedos',
        codigo: '034',
        nome: 'Kit Bola Mini Tênis',
        marca: 'LCM',
        preco: 4.83
        imagem: './img/imagem-034.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'brinquedos',
        codigo: '035',
        nome: 'Brinquedo Interativo Lagartixas',
        marca: 'Pet Games',
        preco: 18.90
        imagem: './img/imagem-035.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'brinquedos',
        codigo: '036',
        nome: 'Brinquedo Macaco de Pelúcia',
        marca: 'Flicks',
        preco: 34.90
        imagem: './img/imagem-036.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'brinquedos',
        codigo: '037',
        nome: 'Brinquedo Pelúcia Girafa',
        marca: 'Flicks',
        preco: 34.90
        imagem: './img/imagem-037.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'brinquedos',
        codigo: '038',
        nome: 'Brinquedo Pelúcia Cacto',
        marca: 'Flicks',
        preco: 24.43
        imagem: './img/imagem-038.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'brinquedos',
        codigo: '039',
        nome: 'Brinquedo Osso Odontopet',
        marca: 'Durabone',
        preco: 29.90
        imagem: './img/imagem-039.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'brinquedos',
        codigo: '040',
        nome: 'Dental Bone Verde',
        marca: 'Alvorada',
        preco: 7.90
        imagem: './img/imagem-040.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'brinquedos',
        codigo: '041',
        nome: 'Brinquedo Pelúcia Mordedor Raposa',
        marca: 'Savana',
        preco: 28.63
        imagem: './img/imagem-041.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'brinquedos',
        codigo: '042',
        nome: 'Mordedor Anel Ring Strong',
        marca: 'Jambo',
        preco: 77.63
        imagem: './img/imagem-042.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'higiene',
        codigo: '043',
        nome: 'Areia Higiênica Biodegradável',
        marca: 'Viva Verde',
        preco: 59.90
        imagem: './img/imagem-043.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'higiene',
        codigo: '044',
        nome: 'Areia Higiênica',
        marca: 'Gatíssimo',
        preco: 15.90
        imagem: './img/imagem-044.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'higiene',
        codigo: '045',
        nome: 'Banho a Seco',
        marca: 'Pet Clean',
        preco: 18.90
        imagem: './img/imagem-045.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'higiene',
        codigo: '046',
        nome: 'Rasqueadeira',
        marca: 'MyHug',
        preco: 21.90
        imagem: './img/imagem-046.jpg'
        gato: true,
        cao: true,
    },
    {
        setor: 'higiene',
        codigo: '047',
        nome: 'Pá Higiênica',
        marca: 'Furacão Pet',
        preco: 6.90
        imagem: './img/imagem-047.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'higiene',
        codigo: '048',
        nome: 'Gel Dental Menta',
        marca: 'Pet Clean',
        preco: 15.50
        imagem: './img/imagem-048.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'higiene',
        codigo: '049',
        nome: 'Tesoura Grande para Unhas',
        marca: 'MyHug',
        preco: 19.90
        imagem: './img/imagem-049.jpg'
        gato: true,
        cao: true,
    },
    {
        setor: 'higiene',
        codigo: '050',
        nome: 'Areia Ultra Ligth Gatos',
        marca: 'Pipicat',
        preco: 36.70
        imagem: './img/imagem-050.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'higiene',
        codigo: '051',
        nome: 'Shampoo Neutro',
        marca: 'Sanol',
        preco: 18.32
        imagem: './img/imagem-051.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'higiene',
        codigo: '052',
        nome: 'Kit Shampoo, Colônia e Condicionador',
        marca: 'Sanol',
        preco: 46.99
        imagem: './img/imagem-052.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'higiene',
        codigo: '053',
        nome: 'Tapete Higiênico Cães',
        marca: 'Blue Premium',
        preco: 26.30
        imagem: './img/imagem-053.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'higiene',
        codigo: '054',
        nome: 'Refil Saquinhos Higiênicos',
        marca: 'HomePet',
        preco: 20.90
        imagem: './img/imagem-054.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'higiene',
        codigo: '055',
        nome: 'Conjunto Cata Caca',
        marca: 'Jambo',
        preco: 17.90
        imagem: './img/imagem-055.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'higiene',
        codigo: '056',
        nome: 'Conjunto Cata Caca',
        marca: 'HomePet',
        preco: 19.90
        imagem: './img/imagem-056.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'saude',
        codigo: '057',
        nome: 'Probiótico Pet',
        marca: 'Aditivo',
        preco: 33.90
        imagem: './img/imagem-057.jpg'
        gato: true,
        cao: true,
    },
    {
        setor: 'saude',
        codigo: '058',
        nome: 'Suplemento Vet',
        marca: 'Avert',
        preco: 62.47
        imagem: './img/imagem-058.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'saude',
        codigo: '059',
        nome: 'Antipulgas para Gatos',
        marca: 'Revolution',
        preco: 96.90
        imagem: './img/imagem-059.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'saude',
        codigo: '060',
        nome: 'Ograx-3',
        marca: 'Ograx',
        preco: 89.90
        imagem: './img/imagem-060.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'saude',
        codigo: '061',
        nome: 'Antipulgas Gatos',
        marca: 'Advocate',
        preco: 84.06
        imagem: './img/imagem-061.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'saude',
        codigo: '062',
        nome: 'Mirtz Gatos',
        marca: 'Agener',
        preco: 85.90
        imagem: './img/imagem-062.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'saude',
        codigo: '063',
        nome: 'Antiácido Omeprazol',
        marca: 'GastroBlock',
        preco: 21.67
        imagem: './img/imagem-063.jpg'
        gato: true,
        cao: false,
    },
    {
        setor: 'saude',
        codigo: '064',
        nome: 'Antipulgas Cães',
        marca: 'Simparic',
        preco: 100.50
        imagem: './img/imagem-064.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'saude',
        codigo: '065',
        nome: 'Antipulgas e Carrapatos',
        marca: 'NexGard',
        preco: 95.90
        imagem: './img/imagem-065.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'saude',
        codigo: '066',
        nome: 'Vermífugo sabor Carne',
        marca: 'Drontal Plus',
        preco: 35.27
        imagem: './img/imagem-066.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'saude',
        codigo: '067',
        nome: 'Apoquel para Cachorro',
        marca: 'Apoquel',
        preco: 240.50
        imagem: './img/imagem-067.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'saude',
        codigo: '068',
        nome: 'Coleira Antipulgas',
        marca: 'Seresto',
        preco: 203.57
        imagem: './img/imagem-068.jpg'
        gato: false,
        cao: true,
    },
    {
        setor: 'saude',
        codigo: '069',
        nome: 'Antibiótico Agemoxi CL 50',
        marca: 'Agemoxi',
        preco: 58.90
        imagem: './img/imagem-069.jpg'
        gato: true,
        cao: true,
    },
    {
        setor: 'saude',
        codigo: '070',
        nome: 'Vermífugo Comprimido',
        marca: 'Vetmax',
        preco: 41.99
        imagem: './img/imagem-070.jpg'
        gato: false,
        cao: true,
    },
]