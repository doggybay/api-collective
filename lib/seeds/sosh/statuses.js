module.exports = db => {
  const statuses = [
    {
      user_id: 4,
      content: 'Deserunt duis Lorem sint dolore duis tempor.',
      createdAt: '2018-05-21T02:44:20+07:00'
    },
    {
      user_id: 9,
      content:
        'Dolor ipsum pariatur anim nisi est ex excepteur voluptate commodo enim nostrud laboris.',
      createdAt: '2018-01-20T01:06:51+07:00'
    },
    {
      user_id: 1,
      content:
        'Eiusmod ut sint nostrud eu elit et anim voluptate sunt est nostrud culpa aliqua.',
      createdAt: '2018-08-24T03:34:17+07:00'
    },
    {
      user_id: 2,
      content:
        'Culpa ut velit proident amet amet cillum ex cillum aliquip aliquip aliquip nulla nisi.',
      createdAt: '2018-03-29T04:45:56+07:00'
    },
    {
      user_id: 1,
      content:
        'Velit dolor pariatur cillum Lorem aliquip et aute officia velit ex.',
      createdAt: '2018-12-25T10:31:20+07:00'
    },
    {
      user_id: 8,
      content:
        'Officia deserunt aliquip minim laborum nostrud incididunt cillum non amet tempor tempor in tempor.',
      createdAt: '2018-06-21T08:45:58+07:00'
    },
    {
      user_id: 2,
      content: 'Dolore incididunt minim et est amet velit aute velit deserunt.',
      createdAt: '2018-08-13T09:00:47+07:00'
    },
    {
      user_id: 5,
      content:
        'Veniam mollit minim consequat commodo proident cillum anim sint velit excepteur commodo dolor.',
      createdAt: '2018-06-28T07:29:27+07:00'
    },
    {
      user_id: 2,
      content: 'Cillum consectetur sit dolor culpa aliquip.',
      createdAt: '2018-09-04T04:35:29+07:00'
    },
    {
      user_id: 2,
      content:
        'Deserunt cupidatat magna occaecat id occaecat nulla pariatur velit amet aute.',
      createdAt: '2019-05-31T07:31:09+07:00'
    },
    {
      user_id: 4,
      content: 'Quis non culpa nisi id sunt occaecat in eu.',
      createdAt: '2018-03-24T11:39:29+07:00'
    },
    {
      user_id: 8,
      content:
        'Ex aute laborum ut culpa veniam officia qui sint tempor laboris magna sunt.',
      createdAt: '2019-04-17T05:06:29+07:00'
    },
    {
      user_id: 9,
      content:
        'Ipsum consectetur ex velit tempor reprehenderit reprehenderit non nisi tempor nulla.',
      createdAt: '2019-04-18T11:34:59+07:00'
    },
    {
      user_id: 3,
      content:
        'Laboris occaecat reprehenderit fugiat esse adipisicing elit ea cupidatat aliqua cillum nostrud dolore id.',
      createdAt: '2019-05-31T06:19:07+07:00'
    },
    {
      user_id: 5,
      content:
        'Non qui cupidatat Lorem sint sit esse aute aute labore aliquip consequat est exercitation.',
      createdAt: '2018-01-21T10:40:57+07:00'
    },
    {
      user_id: 5,
      content: 'Id sit laboris nisi ut commodo dolor exercitation dolore sint.',
      createdAt: '2019-03-03T07:51:47+07:00'
    },
    {
      user_id: 2,
      content: 'Eu aliqua quis id sint aliquip.',
      createdAt: '2019-03-05T02:51:53+07:00'
    },
    {
      user_id: 10,
      content:
        'Dolor sint ut minim mollit ipsum veniam minim dolor fugiat cillum ullamco excepteur nulla.',
      createdAt: '2018-11-22T10:13:41+07:00'
    },
    {
      user_id: 4,
      content: 'Nulla minim minim do voluptate qui incididunt magna sint qui.',
      createdAt: '2018-02-21T05:53:41+07:00'
    },
    {
      user_id: 8,
      content: 'Proident sunt eu mollit voluptate.',
      createdAt: '2019-01-22T09:26:01+07:00'
    },
    {
      user_id: 7,
      content: 'Irure cillum excepteur eiusmod mollit ullamco anim nisi.',
      createdAt: '2018-04-11T04:34:10+07:00'
    },
    {
      user_id: 7,
      content: 'Aliqua in ut officia adipisicing dolor sunt.',
      createdAt: '2018-06-28T11:59:43+07:00'
    },
    {
      user_id: 2,
      content:
        'In aliquip ipsum consequat consequat ullamco incididunt voluptate ad voluptate ut eu in.',
      createdAt: '2018-09-06T05:26:07+07:00'
    },
    {
      user_id: 4,
      content: 'Do reprehenderit id irure Lorem Lorem quis.',
      createdAt: '2018-12-02T05:10:52+07:00'
    },
    {
      user_id: 7,
      content:
        'In non eiusmod Lorem velit in deserunt eu amet ex dolore ullamco cupidatat est dolor.',
      createdAt: '2019-03-27T09:10:53+07:00'
    },
    {
      user_id: 10,
      content:
        'Eiusmod dolor duis eiusmod sunt duis mollit ut quis sunt fugiat reprehenderit fugiat labore esse.',
      createdAt: '2019-04-07T12:25:43+07:00'
    },
    {
      user_id: 4,
      content:
        'Dolor sint nulla ea occaecat et ullamco labore do do aliqua nisi veniam labore adipisicing.',
      createdAt: '2019-03-19T12:15:13+07:00'
    },
    {
      user_id: 7,
      content:
        'Eiusmod nulla deserunt laborum aliqua culpa consectetur aliqua Lorem culpa.',
      createdAt: '2019-04-29T05:27:45+07:00'
    },
    {
      user_id: 6,
      content:
        'Sint eu amet pariatur minim quis mollit tempor enim ipsum qui et culpa cillum ad.',
      createdAt: '2019-03-26T07:54:13+07:00'
    },
    {
      user_id: 8,
      content:
        'Sunt ullamco cillum nisi laboris amet culpa enim elit do aute nulla.',
      createdAt: '2018-12-30T05:49:47+07:00'
    },
    {
      user_id: 2,
      content: 'Labore irure laborum dolor tempor enim commodo.',
      createdAt: '2018-05-29T02:07:27+07:00'
    },
    {
      user_id: 6,
      content:
        'Deserunt dolore aliqua sunt ad aliqua laboris magna tempor veniam nulla aliquip aliquip veniam.',
      createdAt: '2018-05-23T05:40:31+07:00'
    },
    {
      user_id: 9,
      content: 'Labore nisi cillum ea nisi elit ea laborum.',
      createdAt: '2018-03-16T06:26:26+07:00'
    },
    {
      user_id: 6,
      content: 'Do eiusmod eiusmod eu irure ut voluptate est est veniam sunt.',
      createdAt: '2019-07-24T09:27:54+07:00'
    },
    {
      user_id: 5,
      content: 'Duis anim cupidatat ex nisi esse.',
      createdAt: '2018-11-22T06:52:25+07:00'
    },
    {
      user_id: 5,
      content:
        'Officia ut est reprehenderit magna aliqua mollit aliqua ea dolor excepteur ut dolore cillum adipisicing.',
      createdAt: '2018-07-31T05:44:14+07:00'
    },
    {
      user_id: 10,
      content: 'Tempor deserunt enim sunt quis officia velit incididunt.',
      createdAt: '2018-12-31T10:55:38+07:00'
    },
    {
      user_id: 8,
      content:
        'Irure ea aliquip eiusmod sunt elit ullamco magna consectetur dolor duis aliqua deserunt aute.',
      createdAt: '2019-02-24T12:48:51+07:00'
    },
    {
      user_id: 10,
      content: 'Dolore quis eiusmod consectetur consequat aliqua.',
      createdAt: '2018-11-20T07:56:17+07:00'
    },
    {
      user_id: 3,
      content:
        'Voluptate elit quis fugiat labore sit sit ea ea velit tempor excepteur quis aliqua ea.',
      createdAt: '2019-05-26T04:50:31+07:00'
    },
    {
      user_id: 3,
      content:
        'Ea in laboris esse officia aute ad veniam elit dolore laboris ea.',
      createdAt: '2019-03-04T07:08:11+07:00'
    },
    {
      user_id: 7,
      content:
        'Consequat esse ad dolore aliqua nulla ad reprehenderit labore eu adipisicing nostrud ut.',
      createdAt: '2018-03-01T11:33:55+07:00'
    },
    {
      user_id: 5,
      content:
        'Laborum culpa exercitation fugiat sit sunt cillum aliquip voluptate proident ipsum proident.',
      createdAt: '2018-05-24T11:06:14+07:00'
    },
    {
      user_id: 2,
      content:
        'Officia nostrud minim excepteur consectetur labore Lorem fugiat anim sit velit sint.',
      createdAt: '2019-03-26T01:24:09+07:00'
    },
    {
      user_id: 2,
      content:
        'Ea mollit aute dolore officia laborum enim adipisicing magna ex et occaecat reprehenderit.',
      createdAt: '2019-03-28T02:15:27+07:00'
    },
    {
      user_id: 8,
      content:
        'Nulla nostrud eiusmod nostrud id mollit amet magna amet in non ea eiusmod veniam.',
      createdAt: '2018-06-05T09:22:24+07:00'
    },
    {
      user_id: 1,
      content: 'Sunt minim eiusmod et dolore.',
      createdAt: '2019-05-14T07:26:25+07:00'
    },
    {
      user_id: 7,
      content:
        'Mollit Lorem est Lorem aliqua quis ipsum consectetur non excepteur.',
      createdAt: '2018-02-09T09:38:45+07:00'
    },
    {
      user_id: 2,
      content: 'Irure est aliqua cillum ea commodo.',
      createdAt: '2018-09-16T11:40:50+07:00'
    },
    {
      user_id: 8,
      content: 'Irure ea deserunt et excepteur.',
      createdAt: '2018-04-15T03:32:07+07:00'
    }
  ]

  statuses.forEach(status => db.statuses.insert(status))
}
