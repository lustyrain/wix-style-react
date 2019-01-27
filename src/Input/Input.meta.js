import Registry from '@ui-autotools/registry';
import Input from '../../Input';

const meta = Registry.getComponentMetadata(Input);

meta.addSim({
  title: 'Normal_example',
  props: {
    theme: 'normal',
    title: 'Title!'
  }
});

meta.exportName = 'Input'
meta.compiledComponent = {cssPath: '/dist/statics/App.css', compPath: '/dist/src/Input'}
meta.nonEventListenerTestCompliant = true 