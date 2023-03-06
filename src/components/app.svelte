<script>
  import { onMount } from 'svelte';

  import {
    f7,
    f7ready,
    App,
    Panel,
    Views,
    View,
    Popup,
    Page,
    Navbar,
    Toolbar,
    NavRight,
    Link,
    Block,
    BlockTitle,
    LoginScreen,
    LoginScreenTitle,
    List,
    ListItem,
    ListInput,
    ListButton,
    BlockFooter
  } from 'framework7-svelte';
  import routes from '../js/routes';
  import store from '../js/store';


  // Framework7 Parameters
  let f7params = {
    name: 'Cydia', // App name
    theme: 'ios',
    // App store
    store: store,
    // App routes
    routes: routes,
  };

  let link = "/badlink/"
</script>

<App { ...f7params } >


  <!-- Views/Tabs container -->
  <Views tabs>
    <!-- Tabbar for switching views-tabs -->
    <Toolbar tabbar labels bottom>
      <Link tabLink="#view-home" tabLinkActive iconIos="f7:star_fill" text="Cydia" />
      <Link tabLink={link} iconIos="f7:rectangle_stack" text="Sources" />
      <Link tabLink={link} iconIos="f7:clock" text="Changes" />
      <Link tabLink={link} iconIos="f7:arrow_down_circle" text="Installed" />
      <Link tabLink={link} iconIos="f7:search" text="Search" />
    </Toolbar>

    <!-- Your main view/tab, should have "view-main" class. It also has "tabActive" prop -->
    <View id="view-home" main tab tabActive url="/" />


  </Views>
</App>
