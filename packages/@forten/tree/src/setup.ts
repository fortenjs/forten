import { Setup } from '@forten/build'
import { TreeConfig, TreeHooks, TreeSettings } from './types.js'

export const setup: Setup<TreeConfig, TreeSettings> = (config, settings) => {
  const definitions: TreeHooks = {}
  Object.keys(settings).forEach(blockName => {
    const treeSettings = settings[blockName]
    Object.keys(treeSettings).forEach(treeType => {
      const setting = treeSettings[treeType]
      let definition = definitions[treeType]
      if (!definition) {
        definition = {
          newBlock: (ctx, args) => ({ name: 'newBlock', content: {} }),
          treeChanged: [],
          selectNode: [],
          contentChanged: [],
          nameChanged: [],
          contentComponent: () => null,
        }
        definitions[treeType] = definition
      }
      const {
        contentChanged,
        nameChanged,
        contentComponent,
        newBlock,
        treeChanged,
        selectBlock,
      } = setting

      if (contentComponent) {
        definition.contentComponent = contentComponent
      }
      if (newBlock) {
        definition.newBlock = newBlock
      }
      if (selectBlock) {
        definition.selectNode.push(selectBlock)
      }
      if (treeChanged) {
        definition.treeChanged.push(treeChanged)
      }
      if (contentChanged) {
        definition.contentChanged.push(contentChanged)
      }
      if (nameChanged) {
        definition.nameChanged.push(nameChanged)
      }
    })
  })
  config.state.tree.definitions = () => definitions
}
