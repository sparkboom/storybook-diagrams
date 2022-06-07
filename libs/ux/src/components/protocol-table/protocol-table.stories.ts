import { action } from '@storybook/addon-actions';
import ProtocolTable from './ProtocolTable.svelte';

export default {
  title: 'ProtocolTable',
  component: ProtocolTable,
};

export const Simple = () => ({
  Component: ProtocolTable,
  props: {
    title: 'Simple Protocol Tables'
  }
});


export const UDP = () => ({
  Component: ProtocolTable,
  props: {
    title: 'UDP',
    sections: [{
      name: 'Source Port',
      length: 16,
    }, {
      name: 'Destination Port',
      length: 16,
    }, {
      name: 'Length',
      length: 16,
    }, {
      name: 'Checksum',
      length: 16,
    }],
  }
});


export const UDP_Text= () => ({
  Component: ProtocolTable,
  props: {
    title: 'UDP',
    sections: 'Source Port,16|Destination Port,16|Length,16|Checksum,16',
  }
});

export const TCP_Text = () => ({
  Component: ProtocolTable,
  props: {
    title: 'TCP',
    sections: 'Source Port,16|Destination Port,16|Sequence Number,32|Acknowledgement Number (if ACK is set),32|Data Offset,4|Reserved,3|NS,1|CWR,1|ECE,1|URG,1|ACK,1|PSH,1|RST,1|SYN,1|FIN,1|Window Size,16|Checksum,16|Urgent Point (if URG is set),16|Options (if data offset > 5. Padded at the end with "0" bits if necessary.),32',
  }
});
