import { Injectable } from '@angular/core';
import { ResourcesTreeInterface } from '../../interfaces/resources-tree.interface';
import { TipoOfTools, EnumTypeOfTools, EnumTypeIconsOfTools } from '../../interfaces/tipo-of-tools';

@Injectable({
  providedIn: 'root'
})
export class CONSTS {
  constructor() {}

  public static homeCollums = {
    widthColLeft: 'widthColLeft',
    widthColRight: 'widthColRight'
  };

  public static tiposItens = {
    appConfig: 'appConfig',
    pasta: 'pasta',
    servidor: 'servidor',
    rota: 'rota',
    model: 'model',
    controller: 'controller',
    repository: 'repository',
    services: 'services'
  };

  public static editorTabs = {
    editor: 'editor',
    plugins: 'plugins',
    propriedades: 'propriedades'
  };

  public static tipoOfTools: TipoOfTools[] = [
    {
      type: EnumTypeOfTools.variable,
      comment: '',
      previewIcon: EnumTypeIconsOfTools.variable,
      value: 'let var1;'
    },
    {
      type: EnumTypeOfTools.js,
      comment: '',
      previewIcon: EnumTypeIconsOfTools.js,
      value: ''
    },
    {
      type: EnumTypeOfTools.return,
      comment: '',
      previewIcon: EnumTypeIconsOfTools.return,
      value: 'return null;'
    }
  ];

  private static dependencesList = [
    {name: 'cors', version: '^2.8.5'},
    {name: 'debug', version: '^4.1.1'},
    {name: 'express', version: '^4.17.1'},
    {name: 'http', version: '0.0.0'}
  ];

  private static srcPadrao: ResourcesTreeInterface[] = [
    {
      isHaveChild: false,
      isSelected: false,
      indexPath: [],
      tipoItem: CONSTS.tiposItens.appConfig,
      staticPropertiesList: [
        {
          propertieName: 'Nome do projeto: ',
          propertieType: 'disabled',
          propertieSugestions: [],
          propertiePlaceholder: 'Um nome aqui...',
          propertieValue: 'MinhaAPINode'
        },
        {
          propertieName: 'Descrição: ',
          propertieType: 'text',
          propertieSugestions: [],
          propertiePlaceholder: 'Uma descrição aqui...',
          propertieValue: ''
        },
        {
          propertieName: 'Autor: ',
          propertieType: 'text',
          propertieSugestions: [],
          propertiePlaceholder: 'Nome do autor...',
          propertieValue: 'Code Easy'
        },
        {
          propertieName: 'Versão: ',
          propertieType: 'number',
          propertieSugestions: [],
          propertiePlaceholder: 'Ex: \'100\'',
          propertieValue: '100'
        },
        {
          propertieName: 'Caminho: ',
          propertieType: 'selectPath',
          propertieSugestions: [],
          propertiePlaceholder: 'Ex: \'/home/user\'',
          propertieValue: ''
        },
        {
          propertieName: 'Processo atual: ',
          propertieType: 'disabled',
          propertieSugestions: [],
          propertiePlaceholder: '',
          propertieValue: '--'
        },
        {
          propertieName: 'Dependências: ',
          propertieType: 'openDependencias',
          propertieSugestions: [],
          propertiePlaceholder: 'Abrir dependências',
          propertieValue: JSON.stringify(CONSTS.dependencesList)
        },
      ],
      propertiesList: [
        {
          propertieName: '',
          propertieType: 'text',
          propertieSugestions: [],
          propertieValue: ''
        }
      ],
      itemList: []
    },
    {
      isHaveChild: false,
      isSelected: false,
      indexPath: [],
      tipoItem: CONSTS.tiposItens.servidor,
      staticPropertiesList: [
        {
          propertieName: 'Nome: ',
          propertieType: 'text',
          propertieSugestions: [],
          propertiePlaceholder: 'Um nome aqui...',
          propertieValue: 'Servidor'
        },
        {
          propertieName: 'Descrição: ',
          propertieType: 'text',
          propertieSugestions: [],
          propertiePlaceholder: 'Uma descrição aqui...',
          propertieValue: ''
        },
        {
          propertieName: 'Porta: ',
          propertieType: 'number',
          propertieSugestions: [],
          propertiePlaceholder: 'A porta do servidor...',
          propertieValue: '3000'
        },
        {
          propertieName: 'Achar porta livre: ',
          propertieType: 'select',
          propertieSugestions: [
            {
              sugestionsName: 'true',
              sugestionsValue: 'true'
            },
            {
              sugestionsName: 'false',
              sugestionsValue: 'false'
            }
          ],
          propertiePlaceholder: '\'True\' ou \'False\'',
          propertieValue: 'false'
        }
      ],
      propertiesList: [
        {
          propertieName: '',
          propertieType: 'select',
          propertieSugestions: [],
          propertieValue: ''
        }
      ],
      itemList: []
    },
    {
      isHaveChild: true,
      isSelected: false,
      indexPath: [],
      tipoItem: CONSTS.tiposItens.pasta,
      staticPropertiesList: [
        {
          propertieName: 'Nome: ',
          propertieType: 'text',
          propertieSugestions: [],
          propertiePlaceholder: 'Um nome aqui...',
          propertieValue: 'Routers'
        },
        {
          propertieName: 'Descrição: ',
          propertieType: 'text',
          propertieSugestions: [],
          propertiePlaceholder: 'Uma descrição aqui...',
          propertieValue: ''
        }
      ],
      propertiesList: [
        {
          propertieName: '',
          propertieType: 'text',
          propertieSugestions: [],
          propertieValue: ''
        }
      ],
      itemList: [
        {
          isHaveChild: false,
          isSelected: false,
          indexPath: [],
          tipoItem: CONSTS.tiposItens.rota,
          staticPropertiesList: [
            {
              propertieName: 'Nome: ',
              propertieType: 'text',
              propertieSugestions: [],
              propertiePlaceholder: 'Um nome aqui...',
              propertieValue: 'NomeRota'
            },
            {
              propertieName: 'Descrição: ',
              propertieType: 'text',
              propertieSugestions: [],
              propertiePlaceholder: 'Uma descrição aqui...',
              propertieValue: ''
            },
            {
              propertieName: 'Requisição: ',
              propertieType: 'select',
              propertieSugestions: [
                {
                  sugestionsName: 'get',
                  sugestionsValue: 'get'
                },
                {
                  sugestionsName: 'post',
                  sugestionsValue: 'post'
                },
                {
                  sugestionsName: 'put',
                  sugestionsValue: 'put'
                },
                {
                  sugestionsName: 'delete',
                  sugestionsValue: 'delete'
                },
              ],
              propertiePlaceholder: '\'get\', \'post\', \'delete\', \'put\'...',
              propertieValue: 'get'
            },
            {
              propertieName: 'Url: ',
              propertieType: 'text',
              propertieSugestions: [],
              propertiePlaceholder: 'Ex: "/produtos"',
              propertieValue: '/'
            },
            {
              propertieName: 'Retorno: ',
              propertieType: 'select',
              propertieSugestions: [],
              propertiePlaceholder: 'Tudo que será retornado...',
              propertieValue: '0'
            }
          ],
          propertiesList: [
            {
              propertieName: '',
              propertieType: 'text',
              propertieSugestions: [],
              propertieValue: ''
            }
          ],
          itemList: []
        }
      ]
    },
    {
      isHaveChild: true,
      isSelected: false,
      indexPath: [],
      tipoItem: CONSTS.tiposItens.pasta,
      staticPropertiesList: [
        {
          propertieName: 'Nome: ',
          propertieType: 'text',
          propertieSugestions: [],
          propertiePlaceholder: 'Um nome aqui...',
          propertieValue: 'Controllers'
        },
        {
          propertieName: 'Descrição: ',
          propertieType: 'text',
          propertieSugestions: [],
          propertiePlaceholder: 'Uma descrição aqui...',
          propertieValue: ''
        }
      ],
      propertiesList: [
        {
          propertieName: '',
          propertieType: 'text',
          propertieSugestions: [],
          propertieValue: ''
        }
      ],
      itemList: [
        {
          isHaveChild: false,
          isSelected: false,
          indexPath: [],
          tipoItem: CONSTS.tiposItens.controller,
          staticPropertiesList: [
            {
              propertieName: 'Nome: ',
              propertieType: 'text',
              propertieSugestions: [],
              propertiePlaceholder: 'Um nome aqui...',
              propertieValue: 'NomeControler'
            },
            {
              propertieName: 'Descrição: ',
              propertieType: 'text',
              propertieSugestions: [],
              propertiePlaceholder: 'Uma descrição aqui...',
              propertieValue: ''
            },
            {
              propertieName: 'Retorno: ',
              propertieType: 'code',
              propertieSugestions: [],
              propertiePlaceholder: 'Defina o retorno aqui...',
              propertieValue: '[{ "type": "return", "value": "return \\\"Hello world!\\\";\"}]'
            }
          ],
          propertiesList: [
            {
              propertieName: '',
              propertieType: 'text',
              propertieSugestions: [],
              propertieValue: ''
            }
          ],
          itemList: []
        }
      ]
    },
    {
      isHaveChild: true,
      isSelected: false,
      indexPath: [],
      tipoItem: CONSTS.tiposItens.pasta,
      staticPropertiesList: [
        {
          propertieName: 'Nome: ',
          propertieType: 'text',
          propertieSugestions: [],
          propertiePlaceholder: 'Um nome aqui...',
          propertieValue: 'Models'
        },
        {
          propertieName: 'Descrição: ',
          propertieType: 'text',
          propertieSugestions: [],
          propertiePlaceholder: 'Uma descrição aqui...',
          propertieValue: ''
        }
      ],
      propertiesList: [
        {
          propertieName: 'Nome: ',
          propertieType: 'text',
          propertieSugestions: [],
          propertieValue: ''
        }
      ],
      itemList: [
        {
          isHaveChild: false,
          isSelected: false,
          indexPath: [],
          tipoItem: CONSTS.tiposItens.model,
          staticPropertiesList: [
            {
              propertieName: 'Nome: ',
              propertieType: 'text',
              propertieSugestions: [],
              propertiePlaceholder: 'Um nome aqui...',
              propertieValue: 'NomeModelo'
            },
            {
              propertieName: 'Descrição: ',
              propertieType: 'text',
              propertieSugestions: [],
              propertiePlaceholder: 'Uma descrição aqui...',
              propertieValue: ''
            }
          ],
          propertiesList: [
            {
              propertieName: '',
              propertieType: 'text',
              propertieSugestions: [],
              propertieValue: ''
            }
          ],
          itemList: []
        }
      ]
    },
    {
      isHaveChild: true,
      isSelected: false,
      indexPath: [],
      tipoItem: CONSTS.tiposItens.pasta,
      staticPropertiesList: [
        {
          propertieName: 'Nome: ',
          propertieType: 'text',
          propertieSugestions: [],
          propertiePlaceholder: 'Um nome aqui...',
          propertieValue: 'Repository'
        },
        {
          propertieName: 'Descrição: ',
          propertieType: 'text',
          propertieSugestions: [],
          propertiePlaceholder: 'Uma descrição aqui...',
          propertieValue: ''
        }
      ],
      propertiesList: [
        {
          propertieName: '',
          propertieType: 'text',
          propertieSugestions: [],
          propertieValue: ''
        }
      ],
      itemList: [
        {
          isHaveChild: false,
          isSelected: false,
          indexPath: [],
          tipoItem: CONSTS.tiposItens.repository,
          staticPropertiesList: [
            {
              propertieName: 'Nome: ',
              propertieType: 'text',
              propertieSugestions: [],
              propertiePlaceholder: 'Um nome aqui...',
              propertieValue: 'NomeRepositorio'
            },
            {
              propertieName: 'Descrição: ',
              propertieType: 'text',
              propertieSugestions: [],
              propertiePlaceholder: 'Uma descrição aqui...',
              propertieValue: ''
            }
          ],
          propertiesList: [
            {
              propertieName: '',
              propertieType: 'text',
              propertieSugestions: [],
              propertieValue: ''
            }
          ],
          itemList: []
        }
      ]
    },
    {
      isHaveChild: true,
      isSelected: false,
      indexPath: [],
      tipoItem: CONSTS.tiposItens.pasta,
      staticPropertiesList: [
        {
          propertieName: 'Nome: ',
          propertieType: 'text',
          propertieSugestions: [],
          propertiePlaceholder: 'Um nome aqui...',
          propertieValue: 'Services'
        },
        {
          propertieName: 'Descrição: ',
          propertieType: 'text',
          propertieSugestions: [],
          propertiePlaceholder: 'Uma descrição aqui...',
          propertieValue: ''
        }
      ],
      propertiesList: [
        {
          propertieName: 'Nome: ',
          propertieType: 'text',
          propertieSugestions: [],
          propertieValue: ''
        }
      ],
      itemList: [
        {
          isHaveChild: false,
          isSelected: false,
          indexPath: [],
          tipoItem: CONSTS.tiposItens.services,
          staticPropertiesList: [
            {
              propertieName: 'Nome: ',
              propertieType: 'text',
              propertieSugestions: [],
              propertiePlaceholder: 'Um nome aqui...',
              propertieValue: 'NomeService'
            },
            {
              propertieName: 'Descrição: ',
              propertieType: 'text',
              propertieSugestions: [],
              propertiePlaceholder: 'Uma descrição aqui...',
              propertieValue: ''
            }
          ],
          propertiesList: [
            {
              propertieName: 'Nome: ',
              propertieType: 'text',
              propertieSugestions: [],
              propertieValue: ''
            }
          ],
          itemList: []
        }
      ]
    }
  ];

  public static appResources = {
    srcLocal: 'srcLocal',
    srcPadrao: CONSTS.srcPadrao,
    listaProjetos: 'lista-projetos'
  };

}
