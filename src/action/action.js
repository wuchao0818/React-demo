export const DataList = () => {
    const data = [];

    for (let i = 0; i < 46; i++) {
        data.push({
          key: i,
          name: `Edward King ${i}`,
          age: 32,
          address: `London, Park Lane no. ${i}`,
        });
    }
    return data
};

export const NewsList = () => {
    const listData = [];
    for (let i = 0; i < 23; i++) {
      listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      });
  }

  return listData
}

export const speciesData = () =>{
    const treeData = [{
      title: '服饰',
      value: '服饰',
      key: '0-0',
      children: [{
        title: '男装',
        value: '男装',
        key: '0-0-1',
      }, {
        title: '女装',
        value: '女装',
        key: '0-0-2',
      }],
    }, {
      title: '数码',
      value: '数码',
      key: '0-1',
      children: [{
        title: '笔记本',
        value: '笔记本',
        key: '0-1-1',
      }, {
        title: '手机',
        value: '手机',
        key: '0-1-2',
      }],
    }];

    return treeData
}

export const shopList = () =>{
    const data = [];

    for (let i = 0; i < 8; i++) {
        data.push({
          key: i,
          name: `商品名称 ${i}`,
          shopstate: '已出售',
          species: '手机',
          price: `500${i}`,
          channel: `London, Park Lane no. ${i}`,
        });
    }
    for (let i = 8; i < 16; i++) {
      data.push({
        key: i,
        name: `商品名称 ${i}`,
        shopstate: '未出售',
        species: '笔记本',
        price: `1500${i}`,
        channel: `London, Park Lane no. ${i}`,
      });
  }
    return data
}
