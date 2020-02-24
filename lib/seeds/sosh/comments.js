module.exports = db => {
  const comments = [
    {
      content:
        'Commodo aliquip sit excepteur Lorem aliquip nulla aliqua non velit dolore pariatur excepteur.',
      status_id: 26,
      user_id: 5
    },
    {
      content: 'Ipsum laborum laboris excepteur ea anim id.',
      status_id: 30,
      user_id: 14
    },
    {
      content: 'Adipisicing ad id veniam enim aute elit labore.',
      status_id: 42,
      user_id: 37
    },
    {
      content:
        'Qui reprehenderit duis quis culpa deserunt consequat consectetur non culpa excepteur sit fugiat elit.',
      status_id: 32,
      user_id: 50
    },
    {
      content: 'Aute occaecat do culpa amet et laborum.',
      status_id: 46,
      user_id: 14
    },
    {
      content: 'Id ex deserunt sint amet ea commodo esse cupidatat officia.',
      status_id: 13,
      user_id: 12
    },
    {
      content:
        'Labore excepteur proident ad ullamco incididunt laborum incididunt reprehenderit sint ea deserunt non consectetur amet.',
      status_id: 35,
      user_id: 18
    },
    {
      content: 'Adipisicing esse sit do incididunt nostrud proident nulla.',
      status_id: 21,
      user_id: 10
    },
    {
      content: 'Pariatur commodo voluptate irure labore.',
      status_id: 30,
      user_id: 47
    },
    {
      content:
        'Ad est id Lorem ipsum pariatur minim id consectetur enim fugiat est duis esse.',
      status_id: 13,
      user_id: 33
    },
    {
      content:
        'Excepteur sunt reprehenderit consectetur amet nostrud amet qui.',
      status_id: 43,
      user_id: 45
    },
    {
      content:
        'Amet adipisicing quis excepteur pariatur ullamco est duis incididunt occaecat incididunt nisi consequat laborum.',
      status_id: 5,
      user_id: 35
    },
    {
      content:
        'Quis irure dolore laborum exercitation esse non voluptate do mollit esse.',
      status_id: 3,
      user_id: 9
    },
    {
      content:
        'Magna ad minim laboris ad proident et excepteur id duis adipisicing non.',
      status_id: 6,
      user_id: 38
    },
    {
      content: 'Sunt eu Lorem id culpa occaecat.',
      status_id: 44,
      user_id: 10
    },
    {
      content: 'Lorem esse do qui cillum culpa exercitation.',
      status_id: 26,
      user_id: 38
    },
    {
      content:
        'In velit deserunt nostrud eiusmod incididunt aliquip et excepteur incididunt.',
      status_id: 33,
      user_id: 1
    },
    {
      content: 'Consectetur cillum eiusmod velit proident anim laborum.',
      status_id: 38,
      user_id: 50
    },
    {
      content:
        'Aliquip dolor ad ullamco incididunt incididunt adipisicing elit.',
      status_id: 21,
      user_id: 31
    },
    {
      content: 'Esse dolor minim irure quis elit culpa.',
      status_id: 2,
      user_id: 20
    },
    {
      content: 'Amet voluptate non culpa nisi sint velit.',
      status_id: 35,
      user_id: 12
    },
    {
      content:
        'Ullamco fugiat excepteur Lorem eu pariatur exercitation tempor id labore aliqua occaecat veniam.',
      status_id: 5,
      user_id: 38
    },
    {
      content: 'Duis mollit in ullamco commodo ullamco voluptate.',
      status_id: 42,
      user_id: 40
    },
    {
      content: 'Ipsum id exercitation enim consectetur labore.',
      status_id: 13,
      user_id: 48
    },
    {
      content:
        'Fugiat veniam proident esse id enim cupidatat Lorem consectetur ex.',
      status_id: 34,
      user_id: 39
    },
    {
      content: 'Laboris ex laborum eiusmod ea culpa ullamco.',
      status_id: 31,
      user_id: 41
    },
    {
      content: 'Voluptate occaecat exercitation irure do ex sint consectetur.',
      status_id: 25,
      user_id: 40
    },
    {
      content: 'Tempor reprehenderit aute ex adipisicing sint labore.',
      status_id: 28,
      user_id: 9
    },
    {
      content:
        'Veniam anim nostrud officia sit fugiat in eu commodo id id veniam.',
      status_id: 8,
      user_id: 12
    },
    {
      content: 'Et ex ex ad ea laboris laboris et ipsum eu ullamco do.',
      status_id: 49,
      user_id: 40
    },
    {
      content: 'Culpa eiusmod magna ad ipsum aliqua in.',
      status_id: 42,
      user_id: 27
    },
    {
      content:
        'Eu non pariatur nostrud reprehenderit voluptate pariatur in amet nostrud irure ut.',
      status_id: 8,
      user_id: 15
    },
    {
      content: 'Esse Lorem nisi cupidatat deserunt qui.',
      status_id: 28,
      user_id: 6
    },
    {
      content:
        'Eu velit velit laborum ex commodo ex excepteur occaecat ullamco et sit culpa.',
      status_id: 27,
      user_id: 35
    },
    {
      content:
        'Elit est nulla minim nostrud incididunt quis ullamco adipisicing proident duis occaecat velit fugiat.',
      status_id: 26,
      user_id: 16
    },
    {
      content:
        'Id sunt veniam cillum occaecat dolor aliqua exercitation laboris adipisicing.',
      status_id: 1,
      user_id: 8
    },
    {
      content:
        'Non do sit nisi nostrud cupidatat officia dolor ut nostrud cillum dolore.',
      status_id: 1,
      user_id: 20
    },
    {
      content: 'In ipsum elit tempor sint qui laboris non.',
      status_id: 48,
      user_id: 5
    },
    {
      content:
        'Reprehenderit velit consectetur proident qui pariatur magna culpa incididunt velit qui reprehenderit culpa.',
      status_id: 16,
      user_id: 14
    },
    {
      content: 'Non in occaecat nostrud do.',
      status_id: 3,
      user_id: 45
    },
    {
      content:
        'Aliqua eu voluptate sit eiusmod labore voluptate culpa cillum incididunt anim consequat officia duis.',
      status_id: 11,
      user_id: 15
    },
    {
      content: 'Id nisi labore eu eiusmod dolor anim proident laborum nostrud.',
      status_id: 4,
      user_id: 17
    },
    {
      content:
        'Sunt pariatur elit nostrud velit eu ullamco cupidatat tempor culpa quis sint aliqua.',
      status_id: 40,
      user_id: 22
    },
    {
      content:
        'Reprehenderit irure aliquip consequat culpa amet ex commodo amet ad incididunt consectetur.',
      status_id: 48,
      user_id: 37
    },
    {
      content: 'Nostrud incididunt sunt dolor incididunt elit.',
      status_id: 46,
      user_id: 2
    },
    {
      content:
        'Lorem cillum adipisicing culpa aute adipisicing reprehenderit nostrud non esse proident non proident ad do.',
      status_id: 25,
      user_id: 1
    },
    {
      content: 'Anim velit laborum voluptate pariatur elit mollit eiusmod.',
      status_id: 34,
      user_id: 46
    },
    {
      content: 'Ad nulla sint reprehenderit dolore.',
      status_id: 43,
      user_id: 36
    },
    {
      content: 'Excepteur et deserunt non sunt anim.',
      status_id: 27,
      user_id: 13
    },
    {
      content:
        'Est sint cupidatat eiusmod proident tempor cupidatat veniam non nulla voluptate consequat consequat cupidatat.',
      status_id: 1,
      user_id: 13
    },
    {
      content:
        'Tempor occaecat esse est est in irure sint veniam eiusmod amet veniam fugiat excepteur ad.',
      status_id: 29,
      user_id: 19
    },
    {
      content:
        'Occaecat dolore quis laborum ullamco id eiusmod exercitation ullamco nulla dolor ea dolor nulla veniam.',
      status_id: 8,
      user_id: 38
    },
    {
      content: 'Esse excepteur nisi et minim labore irure exercitation.',
      status_id: 33,
      user_id: 2
    },
    {
      content:
        'Proident cupidatat do ad irure enim culpa id cillum sint ea exercitation.',
      status_id: 7,
      user_id: 38
    },
    {
      content: 'Ut et voluptate eu nostrud nulla anim aliquip anim aute.',
      status_id: 25,
      user_id: 17
    },
    {
      content: 'Commodo non qui laboris nulla ullamco.',
      status_id: 18,
      user_id: 20
    },
    {
      content: 'Enim labore occaecat elit deserunt cillum nostrud.',
      status_id: 20,
      user_id: 39
    },
    {
      content:
        'Velit ex est officia officia pariatur quis ad aliquip in reprehenderit eu ipsum proident quis.',
      status_id: 42,
      user_id: 14
    },
    {
      content: 'Enim dolor fugiat fugiat non.',
      status_id: 30,
      user_id: 2
    },
    {
      content: 'Eu anim ea pariatur incididunt aute.',
      status_id: 24,
      user_id: 11
    },
    {
      content:
        'Veniam ipsum quis eiusmod magna velit sunt consequat eiusmod aute sint.',
      status_id: 44,
      user_id: 3
    },
    {
      content: 'Laboris nisi aliquip occaecat in.',
      status_id: 12,
      user_id: 5
    },
    {
      content:
        'Aliquip ullamco excepteur incididunt laborum incididunt consectetur ad quis.',
      status_id: 4,
      user_id: 7
    },
    {
      content:
        'Eiusmod id voluptate ut ut officia veniam aliqua pariatur commodo veniam mollit nisi.',
      status_id: 28,
      user_id: 48
    },
    {
      content:
        'Proident excepteur laborum duis cupidatat magna consectetur mollit aute adipisicing nisi fugiat duis reprehenderit.',
      status_id: 45,
      user_id: 35
    },
    {
      content: 'Nulla qui aliqua dolore veniam ut anim culpa velit.',
      status_id: 34,
      user_id: 22
    },
    {
      content: 'Consequat incididunt veniam eiusmod amet velit duis.',
      status_id: 42,
      user_id: 39
    },
    {
      content:
        'Irure est ea pariatur ullamco in in qui dolore eu in fugiat amet.',
      status_id: 45,
      user_id: 49
    },
    {
      content: 'Minim cupidatat minim labore et amet labore non sit.',
      status_id: 22,
      user_id: 23
    },
    {
      content: 'Ex cupidatat sunt elit nulla nostrud enim quis.',
      status_id: 16,
      user_id: 3
    },
    {
      content: 'Duis quis excepteur velit id eu est minim culpa officia qui.',
      status_id: 49,
      user_id: 14
    },
    {
      content: 'Id excepteur dolore cillum ut.',
      status_id: 24,
      user_id: 17
    },
    {
      content:
        'Cillum officia nostrud occaecat dolor sint commodo consequat nulla exercitation incididunt cillum.',
      status_id: 12,
      user_id: 7
    },
    {
      content:
        'Exercitation sunt mollit nisi aliqua quis excepteur ullamco id ullamco.',
      status_id: 1,
      user_id: 40
    },
    {
      content:
        'Voluptate Lorem aliquip irure excepteur do non sunt duis aute cillum est dolore veniam officia.',
      status_id: 32,
      user_id: 13
    },
    {
      content: 'Incididunt duis aliqua magna et cupidatat do.',
      status_id: 34,
      user_id: 22
    },
    {
      content: 'In incididunt velit veniam ea qui id.',
      status_id: 20,
      user_id: 23
    },
    {
      content: 'Labore minim nostrud amet ex veniam dolore tempor adipisicing.',
      status_id: 47,
      user_id: 40
    },
    {
      content: 'Magna et duis ipsum ex esse pariatur fugiat duis.',
      status_id: 2,
      user_id: 39
    },
    {
      content:
        'Enim cupidatat excepteur magna dolor aute Lorem eu dolor sint ullamco do labore.',
      status_id: 10,
      user_id: 11
    },
    {
      content: 'Cillum ut excepteur mollit magna pariatur amet.',
      status_id: 40,
      user_id: 24
    },
    {
      content: 'Non exercitation aliquip minim tempor.',
      status_id: 31,
      user_id: 40
    },
    {
      content:
        'Minim proident irure magna veniam ea commodo aliqua dolore nisi enim.',
      status_id: 16,
      user_id: 10
    },
    {
      content: 'Ex pariatur occaecat proident adipisicing sunt ex ullamco.',
      status_id: 49,
      user_id: 11
    },
    {
      content: 'Elit mollit aute sunt ullamco velit nostrud irure ullamco.',
      status_id: 40,
      user_id: 44
    },
    {
      content:
        'Dolor magna laborum deserunt aliqua ullamco occaecat cillum sint do laborum ipsum occaecat veniam.',
      status_id: 34,
      user_id: 25
    },
    {
      content:
        'Nisi dolor esse pariatur eu exercitation cillum deserunt do duis incididunt sint elit.',
      status_id: 20,
      user_id: 18
    },
    {
      content:
        'Ullamco eiusmod sunt irure sit pariatur exercitation ullamco reprehenderit elit sit.',
      status_id: 7,
      user_id: 41
    },
    {
      content:
        'Culpa laborum anim est aliqua ullamco velit laboris ullamco ullamco aute dolore nisi.',
      status_id: 30,
      user_id: 40
    },
    {
      content: 'Occaecat qui sunt est nulla.',
      status_id: 38,
      user_id: 26
    },
    {
      content:
        'Ipsum tempor velit laboris sit fugiat proident nulla qui cillum.',
      status_id: 3,
      user_id: 31
    },
    {
      content:
        'Adipisicing consectetur ad officia excepteur minim voluptate nisi velit.',
      status_id: 8,
      user_id: 50
    },
    {
      content:
        'Eiusmod pariatur minim laborum anim labore magna ad enim sint veniam id.',
      status_id: 37,
      user_id: 42
    },
    {
      content: 'Est est mollit non amet.',
      status_id: 24,
      user_id: 19
    },
    {
      content: 'Labore mollit incididunt occaecat ut esse nostrud elit.',
      status_id: 48,
      user_id: 25
    },
    {
      content:
        'Elit duis nisi irure eu commodo consectetur dolore Lorem non voluptate.',
      status_id: 25,
      user_id: 48
    },
    {
      content: 'Est tempor officia occaecat eiusmod cupidatat.',
      status_id: 26,
      user_id: 18
    },
    {
      content:
        'Duis adipisicing amet sunt duis sint occaecat consectetur aliquip sit consequat commodo.',
      status_id: 2,
      user_id: 49
    },
    {
      content: 'Aliqua minim eu eiusmod exercitation sint non qui ad elit id.',
      status_id: 38,
      user_id: 34
    },
    {
      content: 'Qui aute tempor labore qui incididunt non consectetur commodo.',
      status_id: 42,
      user_id: 26
    },
    {
      content:
        'Magna cillum aliquip adipisicing officia dolor magna proident cillum magna sit veniam.',
      status_id: 39,
      user_id: 15
    },
    {
      content:
        'Velit ipsum Lorem est ut dolore nulla nisi qui ipsum eu enim amet occaecat.',
      status_id: 27,
      user_id: 8
    },
    {
      content: 'Proident deserunt non ad amet non et nostrud commodo.',
      status_id: 21,
      user_id: 44
    },
    {
      content:
        'Quis aute officia laboris sunt do aliqua culpa consequat consequat sunt culpa.',
      status_id: 25,
      user_id: 18
    },
    {
      content:
        'Et occaecat magna dolore aliqua laborum aliqua tempor eu cupidatat mollit sunt.',
      status_id: 37,
      user_id: 48
    },
    {
      content:
        'Laborum et amet magna ipsum sint in est commodo consequat nisi ullamco.',
      status_id: 39,
      user_id: 7
    },
    {
      content:
        'Est culpa consectetur voluptate magna do elit do ut eu dolore et fugiat dolor.',
      status_id: 1,
      user_id: 42
    },
    {
      content:
        'Eiusmod ea labore dolor veniam pariatur in commodo ex non ullamco do.',
      status_id: 8,
      user_id: 11
    },
    {
      content: 'Et sunt elit ullamco exercitation ea ipsum sit laborum ea.',
      status_id: 32,
      user_id: 15
    },
    {
      content:
        'Dolor aliquip veniam sint sunt veniam nulla aute nulla sit excepteur aute deserunt adipisicing cupidatat.',
      status_id: 48,
      user_id: 18
    },
    {
      content:
        'Quis anim ea velit irure mollit culpa dolore quis nostrud sit aute.',
      status_id: 13,
      user_id: 41
    },
    {
      content:
        'Aliquip non deserunt ea sunt officia veniam quis minim enim ut deserunt.',
      status_id: 22,
      user_id: 6
    },
    {
      content: 'Cupidatat ipsum eiusmod ipsum voluptate esse.',
      status_id: 16,
      user_id: 30
    },
    {
      content: 'Nisi incididunt laborum est aute irure sit laboris irure.',
      status_id: 40,
      user_id: 38
    },
    {
      content:
        'Fugiat in aliqua velit commodo aliquip voluptate adipisicing sint minim incididunt non elit elit ex.',
      status_id: 5,
      user_id: 25
    },
    {
      content:
        'Laboris tempor dolor in consequat amet ad quis excepteur eiusmod cillum veniam consequat laboris.',
      status_id: 34,
      user_id: 7
    },
    {
      content:
        'Ut do laborum non sit aliqua aute et esse eiusmod aute proident officia minim veniam.',
      status_id: 31,
      user_id: 1
    },
    {
      content:
        'Ad laboris dolor magna id nisi nostrud amet laborum in ipsum aliquip nulla consequat.',
      status_id: 48,
      user_id: 20
    },
    {
      content:
        'Reprehenderit voluptate aliquip id excepteur Lorem enim exercitation reprehenderit ex laborum minim esse aute incididunt.',
      status_id: 1,
      user_id: 15
    },
    {
      content: 'Amet elit minim culpa laborum esse reprehenderit.',
      status_id: 19,
      user_id: 38
    },
    {
      content:
        'Sint aliquip sit velit veniam dolore ex in magna do mollit quis culpa aute.',
      status_id: 5,
      user_id: 24
    },
    {
      content:
        'Nostrud dolore ipsum deserunt ullamco elit nostrud ullamco officia sunt ea pariatur voluptate est qui.',
      status_id: 37,
      user_id: 23
    },
    {
      content:
        'Exercitation aliquip sit voluptate adipisicing nisi aliqua consectetur proident velit.',
      status_id: 24,
      user_id: 46
    },
    {
      content:
        'Amet consequat velit eu ullamco pariatur proident fugiat consectetur commodo.',
      status_id: 9,
      user_id: 30
    },
    {
      content:
        'Aute ea duis nulla labore amet dolore occaecat ut non reprehenderit sit.',
      status_id: 12,
      user_id: 30
    },
    {
      content:
        'Nulla nostrud in irure quis quis Lorem quis exercitation culpa in aliquip sunt quis aute.',
      status_id: 1,
      user_id: 39
    },
    {
      content: 'Quis minim quis sunt tempor duis dolore irure cillum.',
      status_id: 47,
      user_id: 25
    },
    {
      content:
        'Deserunt ea adipisicing eiusmod sint ad aliquip velit ipsum ad culpa veniam commodo mollit.',
      status_id: 22,
      user_id: 47
    },
    {
      content: 'Culpa deserunt nostrud quis adipisicing.',
      status_id: 20,
      user_id: 35
    },
    {
      content:
        'Reprehenderit reprehenderit qui veniam duis ullamco cillum aliqua tempor deserunt non culpa et dolore.',
      status_id: 37,
      user_id: 32
    },
    {
      content: 'Tempor consequat ea velit incididunt fugiat.',
      status_id: 7,
      user_id: 46
    },
    {
      content:
        'Sit quis dolor voluptate ea est velit consectetur proident sit cillum incididunt in.',
      status_id: 2,
      user_id: 16
    },
    {
      content: 'Consequat aliquip ut consequat proident.',
      status_id: 29,
      user_id: 45
    },
    {
      content: 'Ad incididunt ea ipsum ad sit velit id non quis velit.',
      status_id: 29,
      user_id: 29
    },
    {
      content: 'Velit minim sunt irure irure ullamco magna.',
      status_id: 44,
      user_id: 39
    },
    {
      content:
        'Consequat occaecat incididunt enim elit ad dolore laborum amet cupidatat exercitation.',
      status_id: 4,
      user_id: 3
    },
    {
      content: 'Eiusmod dolor fugiat ut excepteur ullamco minim incididunt id.',
      status_id: 38,
      user_id: 39
    },
    {
      content: 'Tempor do non ad laboris laboris in laborum duis ex.',
      status_id: 30,
      user_id: 5
    },
    {
      content:
        'Aute fugiat labore proident nulla fugiat tempor voluptate commodo ipsum reprehenderit.',
      status_id: 14,
      user_id: 38
    },
    {
      content:
        'Labore minim irure nisi elit quis exercitation ullamco enim incididunt voluptate ut et ullamco sunt.',
      status_id: 36,
      user_id: 50
    },
    {
      content: 'Amet mollit et amet incididunt commodo eiusmod quis cupidatat.',
      status_id: 19,
      user_id: 12
    },
    {
      content:
        'Veniam nulla aute Lorem nostrud aliqua ullamco duis nulla est tempor.',
      status_id: 46,
      user_id: 2
    },
    {
      content:
        'Non laborum eu amet sint Lorem anim velit proident adipisicing.',
      status_id: 40,
      user_id: 2
    },
    {
      content:
        'Laboris irure proident ad consectetur veniam laborum aliquip velit aute amet magna et.',
      status_id: 23,
      user_id: 50
    },
    {
      content:
        'Proident consequat occaecat est mollit id aliqua reprehenderit ullamco consectetur minim sunt commodo occaecat elit.',
      status_id: 13,
      user_id: 50
    },
    {
      content: 'Ad deserunt voluptate cillum Lorem est anim.',
      status_id: 37,
      user_id: 2
    },
    {
      content:
        'Labore nulla ad sint eu culpa pariatur sint commodo elit exercitation non.',
      status_id: 1,
      user_id: 6
    },
    {
      content:
        'Fugiat exercitation esse enim ut do magna nulla deserunt magna reprehenderit ad ut velit.',
      status_id: 40,
      user_id: 27
    },
    {
      content:
        'Fugiat velit nisi est labore Lorem amet elit nisi laboris nisi.',
      status_id: 36,
      user_id: 44
    },
    {
      content: 'Commodo laborum ex magna exercitation magna non.',
      status_id: 49,
      user_id: 14
    },
    {
      content:
        'Sit minim cillum aliqua ex ullamco quis id occaecat consequat do ad.',
      status_id: 44,
      user_id: 17
    },
    {
      content:
        'Excepteur consectetur tempor nisi proident Lorem proident minim amet id dolor fugiat cillum id elit.',
      status_id: 12,
      user_id: 23
    },
    {
      content:
        'Voluptate ad labore proident enim Lorem incididunt deserunt ipsum ut laborum.',
      status_id: 21,
      user_id: 7
    },
    {
      content: 'Ullamco mollit et commodo in non.',
      status_id: 30,
      user_id: 11
    },
    {
      content: 'Ut et consectetur sunt aute proident.',
      status_id: 9,
      user_id: 43
    },
    {
      content:
        'Non dolore exercitation eiusmod exercitation laborum dolore labore non magna.',
      status_id: 4,
      user_id: 5
    },
    {
      content: 'Ullamco consectetur incididunt in ipsum laborum sint aliquip.',
      status_id: 35,
      user_id: 9
    },
    {
      content:
        'Mollit cillum nisi aute ut labore proident esse dolore nisi nulla in nostrud.',
      status_id: 19,
      user_id: 1
    },
    {
      content: 'Magna aliquip aute ea deserunt non laboris ea.',
      status_id: 36,
      user_id: 22
    },
    {
      content: 'Fugiat eu incididunt adipisicing esse qui nulla mollit et ex.',
      status_id: 29,
      user_id: 6
    },
    {
      content:
        'Laboris et aliquip deserunt pariatur cillum ipsum proident incididunt.',
      status_id: 50,
      user_id: 43
    },
    {
      content: 'Commodo reprehenderit quis consequat magna.',
      status_id: 37,
      user_id: 4
    },
    {
      content:
        'Id nulla ea velit in mollit aliqua aute pariatur excepteur aliqua in.',
      status_id: 16,
      user_id: 23
    },
    {
      content: 'Esse ex laboris labore qui voluptate duis mollit.',
      status_id: 20,
      user_id: 43
    },
    {
      content:
        'Ad nisi laborum officia velit velit deserunt exercitation pariatur mollit elit aliquip fugiat.',
      status_id: 38,
      user_id: 14
    },
    {
      content: 'Enim mollit duis consectetur qui quis irure aliqua nulla.',
      status_id: 22,
      user_id: 37
    },
    {
      content: 'Est exercitation culpa nisi mollit nulla.',
      status_id: 36,
      user_id: 3
    },
    {
      content: 'Incididunt exercitation velit labore tempor nisi.',
      status_id: 36,
      user_id: 26
    },
    {
      content:
        'Sunt magna esse excepteur anim qui laborum occaecat exercitation aute eiusmod deserunt minim sunt.',
      status_id: 12,
      user_id: 11
    },
    {
      content: 'Adipisicing dolore officia magna laboris magna dolor ut dolor.',
      status_id: 30,
      user_id: 22
    },
    {
      content: 'Ipsum eu amet nostrud velit dolore ex.',
      status_id: 37,
      user_id: 20
    },
    {
      content:
        'Non laborum proident nostrud laborum deserunt voluptate ut magna Lorem eiusmod.',
      status_id: 38,
      user_id: 39
    },
    {
      content: 'Minim est ullamco Lorem ullamco nisi esse veniam commodo.',
      status_id: 13,
      user_id: 2
    },
    {
      content:
        'Veniam cupidatat proident exercitation do proident ex irure velit duis laboris aliqua.',
      status_id: 37,
      user_id: 17
    },
    {
      content:
        'Ea tempor officia minim incididunt cillum ipsum nulla pariatur aliquip cillum cillum sunt consectetur reprehenderit.',
      status_id: 16,
      user_id: 46
    },
    {
      content:
        'Duis ex veniam occaecat proident dolor mollit dolore reprehenderit nulla tempor quis do ad.',
      status_id: 50,
      user_id: 26
    },
    {
      content:
        'Dolor cupidatat occaecat reprehenderit tempor ex consequat sunt.',
      status_id: 33,
      user_id: 40
    },
    {
      content: 'Reprehenderit ipsum fugiat sint amet nisi incididunt esse.',
      status_id: 32,
      user_id: 1
    },
    {
      content:
        'Aliqua consequat elit laborum ex fugiat pariatur in veniam ex laborum sit sint.',
      status_id: 47,
      user_id: 6
    },
    {
      content: 'Nisi voluptate do minim ex non qui.',
      status_id: 41,
      user_id: 39
    },
    {
      content: 'Cupidatat id in culpa esse incididunt voluptate.',
      status_id: 48,
      user_id: 30
    },
    {
      content:
        'Magna non ut exercitation culpa deserunt culpa eiusmod pariatur dolore veniam.',
      status_id: 31,
      user_id: 8
    },
    {
      content:
        'Velit qui tempor commodo duis deserunt officia tempor voluptate nisi quis dolor dolore.',
      status_id: 11,
      user_id: 46
    },
    {
      content: 'In et dolor deserunt velit in tempor in.',
      status_id: 41,
      user_id: 42
    },
    {
      content: 'Commodo consectetur in sunt ullamco non nisi.',
      status_id: 22,
      user_id: 5
    },
    {
      content: 'Irure quis nisi mollit sit Lorem adipisicing.',
      status_id: 28,
      user_id: 26
    },
    {
      content: 'Laborum do excepteur quis esse ut aliquip laborum cupidatat.',
      status_id: 26,
      user_id: 8
    },
    {
      content:
        'Do sit commodo mollit ea laborum ut occaecat nisi ex aliquip enim elit consequat incididunt.',
      status_id: 25,
      user_id: 36
    },
    {
      content: 'Aute est aliqua sint cupidatat sunt.',
      status_id: 36,
      user_id: 17
    },
    {
      content:
        'Laborum dolor enim veniam ad velit est occaecat tempor dolore ea exercitation.',
      status_id: 17,
      user_id: 33
    },
    {
      content:
        'Anim sint esse irure reprehenderit velit occaecat minim duis ea.',
      status_id: 7,
      user_id: 10
    },
    {
      content: 'Cupidatat commodo laborum exercitation cupidatat eu minim.',
      status_id: 32,
      user_id: 29
    },
    {
      content: 'In non et proident ullamco.',
      status_id: 31,
      user_id: 25
    },
    {
      content: 'Ullamco pariatur velit cupidatat quis.',
      status_id: 43,
      user_id: 43
    },
    {
      content: 'Nostrud in sunt in magna.',
      status_id: 46,
      user_id: 43
    },
    {
      content:
        'Aute id cupidatat pariatur elit nostrud dolor mollit excepteur nostrud incididunt magna ad.',
      status_id: 34,
      user_id: 7
    },
    {
      content:
        'Irure irure et id occaecat velit aliqua est consequat incididunt exercitation laborum et occaecat deserunt.',
      status_id: 42,
      user_id: 25
    },
    {
      content:
        'Exercitation aliqua veniam pariatur qui sunt laboris aliqua nulla do id cupidatat minim irure ullamco.',
      status_id: 25,
      user_id: 43
    },
    {
      content:
        'Pariatur occaecat consectetur duis laboris cupidatat sunt reprehenderit aliqua proident pariatur ipsum nisi ad.',
      status_id: 33,
      user_id: 34
    },
    {
      content:
        'Irure nisi aute aliquip fugiat occaecat ut mollit voluptate laborum.',
      status_id: 38,
      user_id: 50
    }
  ]

  comments.forEach(comment => db.statusComments.insert(comment))
}
