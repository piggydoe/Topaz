<Page name="home">
  <!-- Top Navbar -->
  <!-- svelte-ignore a11y-missing-attribute -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <Navbar title="Home">
    <a on:click={openAlert} slot="left">About</a>
    <a on:click={() => window.location.reload} slot="right">Reload</a>
  </Navbar>

  <Block style="display:flex; justify-content:space-between; margin-top:15px; border-bottom: #b8b9bb 0.5px solid; margin-bottom:0px; padding-bottom:15px;">
    <img style="width: 64px; height:64px;" src="https://test.cydiafree.com/images/Cydia_logo.png">
    <div style="text-align:center; display:flex; gap:0px; flex-direction:column; padding:0px; margin:0px;">
      <h2 style="font-weight:400; padding:0px; margin-top: 0px; margin: 0px;">Welcome to Cydia™</h2>
      <p style="margin-top: -3px;">remade by sn0wie @ jailbreaks remade</p>
    </div>
    <div>&nbsp;</div>
  </Block>

  <ListLinksOne/>

  <div style="margin-top: -60px;">
    <List>
      <ListItem style="background: #E5EEF5;" title="3G Unrestrictor" link="#">
        <img slot="media" src="https://test.cydiafree.com/images/com.kstreich-dev.3gunrestrictor5.png" width="30" />
      </ListItem>
      <ListItem style="background: #E5EEF5;" title="MyWi 8" link="#">
        <img slot="media" src="https://test.cydiafree.com/images/com.intelliborn.mywi6.png" width="30" />
      </ListItem>
    </List>
  </div>
</Page>
<script>
  export let f7router;

  import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button,
    f7
  } from 'framework7-svelte';

  import ListLinksOne from '../components/micros/ListLinksOne.svelte';

  const openAlert = () => {
    f7.dialog.alert('Copyright © 2008-2016<br>SaurikIT, LLC<br><br>Jay Freeman (saurik)<br>saurik@saurik.com<br>http://www.saurik.com/', 'About Cydia Installer', () => {
      f7router.back();
    });
  }
</script>