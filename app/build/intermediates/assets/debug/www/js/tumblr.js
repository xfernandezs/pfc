


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>tumblr.js/lib/tumblr.js at master · tumblr/tumblr.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe114-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (0e75de19f8) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="502321F1:3F17:1FDFF4F:52762158" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="tHGpGdvkfaqn1F1GH9WUGX3f4q+UWP7Rnu9sYthbVNY=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-82d95d078b16fa64cfcabaff99138f5c59619266.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-b95518dadd9fd57d8fb892270da34baed14530c4.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-3d32afc910800ca0abfc4ed4357ed8a6f369f266.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-3ebcae34d9d5b6bd9a5bd8e3f5560c3692877177.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="6f6817f7edc3e64c7c6a02986ff4c698">

        <link data-pjax-transient rel='permalink' href='/tumblr/tumblr.js/blob/b509146940ddf849938636994c827648ad040f14/lib/tumblr.js'>
  <meta property="og:title" content="tumblr.js"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/tumblr/tumblr.js"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="tumblr.js - JavaScript client for the Tumblr API"/>

  <meta name="description" content="tumblr.js - JavaScript client for the Tumblr API" />

  <meta content="366151" name="octolytics-dimension-user_id" /><meta content="tumblr" name="octolytics-dimension-user_login" /><meta content="8058953" name="octolytics-dimension-repository_id" /><meta content="tumblr/tumblr.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="true" name="octolytics-dimension-repository_is_fork" /><meta content="4561978" name="octolytics-dimension-repository_parent_id" /><meta content="irace/tumblr.js" name="octolytics-dimension-repository_parent_nwo" /><meta content="4561978" name="octolytics-dimension-repository_network_root_id" /><meta content="irace/tumblr.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/tumblr/tumblr.js/commits/master.atom" rel="alternate" title="Recent Commits to tumblr.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production windows vis-public fork  page-blob">
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Ftumblr%2Ftumblr.js%2Fblob%2Fmaster%2Flib%2Ftumblr.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="tumblr/tumblr.js"
      data-branch="master"
      data-sha="0a4f7a1dd7268015e11f94bae26ff346cc41340a"
  >

    <input type="hidden" name="nwo" value="tumblr/tumblr.js" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
  <a href="/login?return_to=%2Ftumblr%2Ftumblr.js"
  class="minibutton with-count js-toggler-target star-button entice tooltipped upwards"
  title="You must be signed in to use this feature" rel="nofollow">
  <span class="octicon octicon-star"></span>Star
</a>
<a class="social-count js-social-count" href="/tumblr/tumblr.js/stargazers">
  138
</a>

  </li>

    <li>
      <a href="/login?return_to=%2Ftumblr%2Ftumblr.js"
        class="minibutton with-count js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/tumblr/tumblr.js/network" class="social-count">
        28
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/tumblr" class="url fn" itemprop="url" rel="author"><span itemprop="title">tumblr</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/tumblr/tumblr.js" class="js-current-repository js-repo-home-link">tumblr.js</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

            <span class="fork-flag">
              <span class="text">forked from <a href="/irace/tumblr.js">irace/tumblr.js</a></span>
            </span>
        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" title="Code">
        <a href="/tumblr/tumblr.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /tumblr/tumblr.js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/tumblr/tumblr.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /tumblr/tumblr.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>5</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/tumblr/tumblr.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /tumblr/tumblr.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>4</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/tumblr/tumblr.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /tumblr/tumblr.js/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/tumblr/tumblr.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /tumblr/tumblr.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/tumblr/tumblr.js/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /tumblr/tumblr.js/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/tumblr/tumblr.js.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/tumblr/tumblr.js.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/tumblr/tumblr.js" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/tumblr/tumblr.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

              <a href="/tumblr/tumblr.js/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:648714d6df8d46a1ea4444a3ee4b8a87 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/tumblr/tumblr.js/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tumblr/tumblr.js/blob/avatarUrl/lib/tumblr.js"
                 data-name="avatarUrl"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="avatarUrl">avatarUrl</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tumblr/tumblr.js/blob/gh-pages/lib/tumblr.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tumblr/tumblr.js/blob/master/lib/tumblr.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tumblr/tumblr.js/tree/v0.0.4/lib/tumblr.js"
                 data-name="v0.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.0.4">v0.0.4</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/tumblr/tumblr.js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">tumblr.js</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/tumblr/tumblr.js/tree/master/lib" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">lib</span></a></span><span class="separator"> / </span><strong class="final-path">tumblr.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="lib/tumblr.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://0.gravatar.com/avatar/3a0541ed3d5324bb54b9f07990be20ae?d=https%3A%2F%2Fidenticons.github.com%2F1d817fe1aa7d826289fc8735e75d9fb9.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/seejohnrun" rel="author">seejohnrun</a></span>
    <time class="js-relative-date" datetime="2013-03-04T23:09:08-08:00" title="2013-03-04 23:09:08">March 04, 2013</time>
    <div class="commit-title">
        <a href="/tumblr/tumblr.js/commit/8fe27fcb362d02fd7c48d3db853938b8a6d005a3" class="message" data-pjax="true" title="Change how params are passed into request on _get

Closes #2">Change how params are passed into request on _get</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img height="24" src="https://0.gravatar.com/avatar/3a0541ed3d5324bb54b9f07990be20ae?d=https%3A%2F%2Fidenticons.github.com%2F1d817fe1aa7d826289fc8735e75d9fb9.png&amp;r=x&amp;s=140" width="24" />
            <a href="/seejohnrun">seejohnrun</a>
          </li>
      </ul>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>250 lines (193 sloc)</span>
        <span>6.699 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped leftwards"
               href="http://windows.github.com" title="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled js-entice" href=""
                 data-entice="You must be signed in to make or propose changes">Edit</a>
          <a href="/tumblr/tumblr.js/raw/master/lib/tumblr.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/tumblr/tumblr.js/blame/master/lib/tumblr.js" class="button minibutton ">Blame</a>
          <a href="/tumblr/tumblr.js/commits/master/lib/tumblr.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon js-entice" href=""
             data-entice="You must be signed in and on a branch to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><span class="kd">var</span> <span class="nx">fs</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;fs&#39;</span><span class="p">);</span></div><div class='line' id='LC2'><span class="kd">var</span> <span class="nx">qs</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;querystring&#39;</span><span class="p">);</span></div><div class='line' id='LC3'><br/></div><div class='line' id='LC4'><span class="kd">function</span> <span class="nx">TumblrClient</span><span class="p">(</span><span class="nx">credentials</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC5'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">credentials</span> <span class="o">=</span> <span class="nx">credentials</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC6'><span class="p">}</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'><span class="kd">var</span> <span class="nx">request</span><span class="p">;</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'>&nbsp;&nbsp;<span class="nx">Client</span><span class="o">:</span> <span class="nx">TumblrClient</span><span class="p">,</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'>&nbsp;&nbsp;<span class="nx">createClient</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">credentials</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">TumblrClient</span><span class="p">(</span><span class="nx">credentials</span><span class="p">);</span></div><div class='line' id='LC16'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'>&nbsp;&nbsp;<span class="nx">request</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">r</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">request</span> <span class="o">=</span> <span class="nx">r</span><span class="p">;</span></div><div class='line' id='LC20'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC21'><br/></div><div class='line' id='LC22'><span class="p">};</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'><span class="kd">var</span> <span class="nx">baseURL</span> <span class="o">=</span> <span class="s1">&#39;http://api.tumblr.com/v2&#39;</span><span class="p">;</span></div><div class='line' id='LC25'><br/></div><div class='line' id='LC26'><span class="kd">var</span> <span class="nx">calls</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'>&nbsp;&nbsp;<span class="nx">postCreation</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">requireOptions</span><span class="p">,</span> <span class="nx">acceptsData</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">blogName</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">requireValidation</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="nx">requireOptions</span><span class="p">);</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="nx">type</span><span class="p">;</span></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">acceptsData</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">options</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_post</span><span class="p">(</span><span class="nx">blogPath</span><span class="p">(</span><span class="nx">blogName</span><span class="p">,</span> <span class="s1">&#39;/post&#39;</span><span class="p">),</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC37'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'>&nbsp;&nbsp;<span class="nx">getWithOptions</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">path</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">options</span><span class="p">))</span> <span class="p">{</span> <span class="nx">callback</span> <span class="o">=</span> <span class="nx">options</span><span class="p">;</span> <span class="nx">options</span> <span class="o">=</span> <span class="p">{};</span> <span class="p">}</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">path</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC44'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'>&nbsp;&nbsp;<span class="nx">blogList</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">path</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">blogName</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">options</span><span class="p">))</span> <span class="p">{</span> <span class="nx">callback</span> <span class="o">=</span> <span class="nx">options</span><span class="p">;</span> <span class="nx">options</span> <span class="o">=</span> <span class="p">{};</span> <span class="p">}</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">blogPath</span><span class="p">(</span><span class="nx">blogName</span><span class="p">,</span> <span class="nx">path</span><span class="p">),</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC51'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'><span class="p">};</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'><span class="nx">TumblrClient</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'>&nbsp;&nbsp;<span class="c1">// Tagged</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'>&nbsp;&nbsp;<span class="nx">tagged</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">tag</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">options</span><span class="p">))</span> <span class="p">{</span> <span class="nx">callback</span> <span class="o">=</span> <span class="nx">options</span><span class="p">;</span> <span class="nx">options</span> <span class="o">=</span> <span class="p">{};</span> <span class="p">}</span></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">tag</span> <span class="o">=</span> <span class="nx">tag</span><span class="p">;</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="s1">&#39;/tagged&#39;</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">callback</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC66'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC67'><br/></div><div class='line' id='LC68'>&nbsp;&nbsp;<span class="c1">// Blogs</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>&nbsp;&nbsp;<span class="nx">blogInfo</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">blogName</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">blogPath</span><span class="p">(</span><span class="nx">blogName</span><span class="p">,</span> <span class="s1">&#39;/info&#39;</span><span class="p">),</span> <span class="p">{},</span> <span class="nx">callback</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC72'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'>&nbsp;&nbsp;<span class="nx">avatar</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">blogName</span><span class="p">,</span> <span class="nx">size</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">size</span><span class="p">))</span> <span class="p">{</span> <span class="nx">callback</span> <span class="o">=</span> <span class="nx">size</span><span class="p">;</span> <span class="nx">size</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">path</span> <span class="o">=</span> <span class="nx">size</span> <span class="o">?</span> <span class="s1">&#39;/avatar/&#39;</span> <span class="o">+</span> <span class="nx">size</span> <span class="o">:</span> <span class="s1">&#39;/avatar&#39;</span><span class="p">;</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">blogPath</span><span class="p">(</span><span class="nx">blogName</span><span class="p">,</span> <span class="nx">path</span><span class="p">),</span> <span class="p">{},</span> <span class="nx">callback</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC78'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'>&nbsp;&nbsp;<span class="nx">blogLikes</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">blogName</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">options</span><span class="p">))</span> <span class="p">{</span> <span class="nx">callback</span> <span class="o">=</span> <span class="nx">options</span><span class="p">;</span> <span class="nx">options</span> <span class="o">=</span> <span class="p">{};</span> <span class="p">}</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">blogPath</span><span class="p">(</span><span class="nx">blogName</span><span class="p">,</span> <span class="s1">&#39;/likes&#39;</span><span class="p">),</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">callback</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC83'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'>&nbsp;&nbsp;<span class="nx">followers</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">blogName</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">options</span><span class="p">))</span> <span class="p">{</span> <span class="nx">callback</span> <span class="o">=</span> <span class="nx">options</span><span class="p">;</span> <span class="nx">options</span> <span class="o">=</span> <span class="p">{};</span> <span class="p">}</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">blogPath</span><span class="p">(</span><span class="nx">blogName</span><span class="p">,</span> <span class="s1">&#39;/followers&#39;</span><span class="p">),</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC88'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>&nbsp;&nbsp;<span class="nx">posts</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">blogName</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">options</span><span class="p">))</span> <span class="p">{</span> <span class="nx">callback</span> <span class="o">=</span> <span class="nx">options</span><span class="p">;</span> <span class="nx">options</span> <span class="o">=</span> <span class="p">{};</span> <span class="p">}</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">path</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">type</span> <span class="o">?</span> <span class="s1">&#39;/posts/&#39;</span> <span class="o">+</span> <span class="nx">options</span><span class="p">.</span><span class="nx">type</span> <span class="o">:</span> <span class="s1">&#39;/posts&#39;</span><span class="p">;</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">blogPath</span><span class="p">(</span><span class="nx">blogName</span><span class="p">,</span> <span class="nx">path</span><span class="p">),</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">callback</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC95'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC96'><br/></div><div class='line' id='LC97'>&nbsp;&nbsp;<span class="nx">queue</span><span class="o">:</span>       <span class="nx">calls</span><span class="p">.</span><span class="nx">blogList</span><span class="p">(</span><span class="s1">&#39;/posts/queue&#39;</span><span class="p">),</span></div><div class='line' id='LC98'>&nbsp;&nbsp;<span class="nx">drafts</span><span class="o">:</span>      <span class="nx">calls</span><span class="p">.</span><span class="nx">blogList</span><span class="p">(</span><span class="s1">&#39;/posts/draft&#39;</span><span class="p">),</span></div><div class='line' id='LC99'>&nbsp;&nbsp;<span class="nx">submissions</span><span class="o">:</span> <span class="nx">calls</span><span class="p">.</span><span class="nx">blogList</span><span class="p">(</span><span class="s1">&#39;/posts/submission&#39;</span><span class="p">),</span></div><div class='line' id='LC100'><br/></div><div class='line' id='LC101'>&nbsp;&nbsp;<span class="c1">// Posts</span></div><div class='line' id='LC102'><br/></div><div class='line' id='LC103'>&nbsp;&nbsp;<span class="nx">edit</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">blogName</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_post</span><span class="p">(</span><span class="nx">blogPath</span><span class="p">(</span><span class="nx">blogName</span><span class="p">,</span> <span class="s1">&#39;/post/edit&#39;</span><span class="p">),</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC105'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'>&nbsp;&nbsp;<span class="nx">reblog</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">blogName</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_post</span><span class="p">(</span><span class="nx">blogPath</span><span class="p">(</span><span class="nx">blogName</span><span class="p">,</span> <span class="s1">&#39;/post/reblog&#39;</span><span class="p">),</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC109'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC110'><br/></div><div class='line' id='LC111'>&nbsp;&nbsp;<span class="nx">deletePost</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">blogName</span><span class="p">,</span> <span class="nx">id</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_post</span><span class="p">(</span><span class="nx">blogPath</span><span class="p">(</span><span class="nx">blogName</span><span class="p">,</span> <span class="s1">&#39;/post/delete&#39;</span><span class="p">),</span> <span class="p">{</span><span class="nx">id</span><span class="o">:</span> <span class="nx">id</span><span class="p">},</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC113'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'>&nbsp;&nbsp;<span class="nx">photo</span><span class="o">:</span> <span class="nx">calls</span><span class="p">.</span><span class="nx">postCreation</span><span class="p">(</span><span class="s1">&#39;photo&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;data&#39;</span><span class="p">,</span> <span class="s1">&#39;source&#39;</span><span class="p">],</span>       <span class="kc">true</span><span class="p">),</span></div><div class='line' id='LC116'>&nbsp;&nbsp;<span class="nx">audio</span><span class="o">:</span> <span class="nx">calls</span><span class="p">.</span><span class="nx">postCreation</span><span class="p">(</span><span class="s1">&#39;audio&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;data&#39;</span><span class="p">,</span> <span class="s1">&#39;external_url&#39;</span><span class="p">],</span> <span class="kc">true</span><span class="p">),</span></div><div class='line' id='LC117'>&nbsp;&nbsp;<span class="nx">video</span><span class="o">:</span> <span class="nx">calls</span><span class="p">.</span><span class="nx">postCreation</span><span class="p">(</span><span class="s1">&#39;video&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;data&#39;</span><span class="p">,</span> <span class="s1">&#39;embed&#39;</span><span class="p">],</span>        <span class="kc">true</span><span class="p">),</span></div><div class='line' id='LC118'>&nbsp;&nbsp;<span class="nx">quote</span><span class="o">:</span> <span class="nx">calls</span><span class="p">.</span><span class="nx">postCreation</span><span class="p">(</span><span class="s1">&#39;quote&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;quote&#39;</span><span class="p">],</span>                <span class="kc">false</span><span class="p">),</span></div><div class='line' id='LC119'>&nbsp;&nbsp;<span class="nx">text</span><span class="o">:</span>  <span class="nx">calls</span><span class="p">.</span><span class="nx">postCreation</span><span class="p">(</span><span class="s1">&#39;text&#39;</span><span class="p">,</span>  <span class="p">[</span><span class="s1">&#39;body&#39;</span><span class="p">],</span>                 <span class="kc">false</span><span class="p">),</span></div><div class='line' id='LC120'>&nbsp;&nbsp;<span class="nx">link</span><span class="o">:</span>  <span class="nx">calls</span><span class="p">.</span><span class="nx">postCreation</span><span class="p">(</span><span class="s1">&#39;link&#39;</span><span class="p">,</span>  <span class="p">[</span><span class="s1">&#39;url&#39;</span><span class="p">],</span>                  <span class="kc">false</span><span class="p">),</span></div><div class='line' id='LC121'>&nbsp;&nbsp;<span class="nx">chat</span><span class="o">:</span>  <span class="nx">calls</span><span class="p">.</span><span class="nx">postCreation</span><span class="p">(</span><span class="s1">&#39;chat&#39;</span><span class="p">,</span>  <span class="p">[</span><span class="s1">&#39;conversation&#39;</span><span class="p">],</span>         <span class="kc">false</span><span class="p">),</span></div><div class='line' id='LC122'><br/></div><div class='line' id='LC123'>&nbsp;&nbsp;<span class="c1">// User</span></div><div class='line' id='LC124'><br/></div><div class='line' id='LC125'>&nbsp;&nbsp;<span class="nx">userInfo</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="s1">&#39;/user/info&#39;</span><span class="p">,</span> <span class="p">{},</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC127'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC128'><br/></div><div class='line' id='LC129'>&nbsp;&nbsp;<span class="nx">likes</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">options</span><span class="p">))</span> <span class="p">{</span> <span class="nx">callback</span> <span class="o">=</span> <span class="nx">options</span><span class="p">;</span> <span class="nx">options</span> <span class="o">=</span> <span class="p">{};</span> <span class="p">}</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="s1">&#39;/user/likes&#39;</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC132'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC133'><br/></div><div class='line' id='LC134'>&nbsp;&nbsp;<span class="nx">follow</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_post</span><span class="p">(</span><span class="s1">&#39;/user/follow&#39;</span><span class="p">,</span> <span class="p">{</span><span class="nx">url</span><span class="o">:</span> <span class="nx">url</span><span class="p">},</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC136'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC137'><br/></div><div class='line' id='LC138'>&nbsp;&nbsp;<span class="nx">unfollow</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_post</span><span class="p">(</span><span class="s1">&#39;/user/unfollow&#39;</span><span class="p">,</span> <span class="p">{</span><span class="nx">url</span><span class="o">:</span> <span class="nx">url</span><span class="p">},</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC140'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC141'><br/></div><div class='line' id='LC142'>&nbsp;&nbsp;<span class="nx">like</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">id</span><span class="p">,</span> <span class="nx">reblogKey</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_post</span><span class="p">(</span><span class="s1">&#39;/user/like&#39;</span><span class="p">,</span> <span class="p">{</span><span class="nx">id</span><span class="o">:</span> <span class="nx">id</span><span class="p">,</span> <span class="nx">reblog_key</span><span class="o">:</span> <span class="nx">reblogKey</span><span class="p">},</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC144'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC145'><br/></div><div class='line' id='LC146'>&nbsp;&nbsp;<span class="nx">unlike</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">id</span><span class="p">,</span> <span class="nx">reblogKey</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_post</span><span class="p">(</span><span class="s1">&#39;/user/unlike&#39;</span><span class="p">,</span> <span class="p">{</span><span class="nx">id</span><span class="o">:</span> <span class="nx">id</span><span class="p">,</span> <span class="nx">reblog_key</span><span class="o">:</span> <span class="nx">reblogKey</span><span class="p">},</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC148'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC149'><br/></div><div class='line' id='LC150'>&nbsp;&nbsp;<span class="nx">dashboard</span><span class="o">:</span> <span class="nx">calls</span><span class="p">.</span><span class="nx">getWithOptions</span><span class="p">(</span><span class="s1">&#39;/user/dashboard&#39;</span><span class="p">),</span></div><div class='line' id='LC151'>&nbsp;&nbsp;<span class="nx">following</span><span class="o">:</span> <span class="nx">calls</span><span class="p">.</span><span class="nx">getWithOptions</span><span class="p">(</span><span class="s1">&#39;/user/following&#39;</span><span class="p">),</span></div><div class='line' id='LC152'><br/></div><div class='line' id='LC153'>&nbsp;&nbsp;<span class="c1">// Helpers</span></div><div class='line' id='LC154'><br/></div><div class='line' id='LC155'>&nbsp;&nbsp;<span class="nx">_get</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">path</span><span class="p">,</span> <span class="nx">params</span><span class="p">,</span> <span class="nx">callback</span><span class="p">,</span> <span class="nx">addApiKey</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC156'><br/></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span> <span class="o">=</span> <span class="nx">params</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">addApiKey</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span><span class="p">.</span><span class="nx">api_key</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">credentials</span><span class="p">.</span><span class="nx">consumer_key</span><span class="p">;</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC161'><br/></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">request</span><span class="p">.</span><span class="nx">get</span><span class="p">({</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="nx">baseURL</span> <span class="o">+</span> <span class="nx">path</span> <span class="o">+</span> <span class="s1">&#39;?&#39;</span> <span class="o">+</span> <span class="nx">qs</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">params</span><span class="p">),</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">json</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">oauth</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">credentials</span><span class="p">,</span></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">followRedirect</span><span class="o">:</span> <span class="kc">false</span></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="nx">requestCallback</span><span class="p">(</span><span class="nx">callback</span><span class="p">));</span></div><div class='line' id='LC168'><br/></div><div class='line' id='LC169'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC170'><br/></div><div class='line' id='LC171'>&nbsp;&nbsp;<span class="nx">_post</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">path</span><span class="p">,</span> <span class="nx">params</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC172'><br/></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">params</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">params</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC175'><br/></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Sign without multipart data</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="nx">request</span><span class="p">.</span><span class="nx">post</span><span class="p">(</span><span class="nx">baseURL</span> <span class="o">+</span> <span class="nx">path</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">response</span><span class="p">,</span> <span class="nx">body</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">body</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">body</span><span class="p">);</span></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">requestCallback</span><span class="p">(</span><span class="nx">callback</span><span class="p">)(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">response</span><span class="p">,</span> <span class="nx">body</span><span class="p">);</span></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC181'><br/></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Sign it with the non-data parameters</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">r</span><span class="p">.</span><span class="nx">form</span><span class="p">(</span><span class="nx">params</span><span class="p">);</span></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">r</span><span class="p">.</span><span class="nx">oauth</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">credentials</span><span class="p">);</span></div><div class='line' id='LC185'><br/></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Clear the side effects from form(param)</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">r</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="s1">&#39;content-type&#39;</span><span class="p">];</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">r</span><span class="p">.</span><span class="nx">body</span><span class="p">;</span></div><div class='line' id='LC189'><br/></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// And then add the full body</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">form</span> <span class="o">=</span> <span class="nx">r</span><span class="p">.</span><span class="nx">form</span><span class="p">();</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">params</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">form</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">params</span><span class="p">[</span><span class="nx">key</span><span class="p">]);</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">form</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;data&#39;</span><span class="p">,</span> <span class="nx">fs</span><span class="p">.</span><span class="nx">createReadStream</span><span class="p">(</span><span class="nx">data</span><span class="p">));</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC198'><br/></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Add the form header back</span></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">headers</span> <span class="o">=</span> <span class="nx">form</span><span class="p">.</span><span class="nx">getHeaders</span><span class="p">();</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">headers</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">r</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">headers</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC204'><br/></div><div class='line' id='LC205'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC206'><br/></div><div class='line' id='LC207'><span class="p">};</span></div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'><span class="kd">var</span> <span class="nx">requireValidation</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="nx">choices</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC210'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">count</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC211'>&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">choices</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">[</span><span class="nx">choices</span><span class="p">[</span><span class="nx">i</span><span class="p">]])</span> <span class="p">{</span></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">count</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC215'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC216'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">choices</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">count</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Missing required field: &quot;&#39;</span> <span class="o">+</span> <span class="nx">choices</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span><span class="p">);</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC220'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">choices</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">count</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Missing one of: &#39;</span> <span class="o">+</span> <span class="nx">choices</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;,&#39;</span><span class="p">));</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">count</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Can only use one of: &#39;</span> <span class="o">+</span> <span class="nx">choices</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;,&#39;</span><span class="p">));</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC227'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC228'><span class="p">};</span></div><div class='line' id='LC229'><br/></div><div class='line' id='LC230'><span class="kd">function</span> <span class="nx">blogPath</span><span class="p">(</span><span class="nx">blogName</span><span class="p">,</span> <span class="nx">path</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC231'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">bn</span> <span class="o">=</span> <span class="nx">blogName</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;.&#39;</span><span class="p">)</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span> <span class="o">?</span> <span class="nx">blogName</span> <span class="o">:</span> <span class="nx">blogName</span> <span class="o">+</span> <span class="s1">&#39;.tumblr.com&#39;</span><span class="p">;</span></div><div class='line' id='LC232'>&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;/blog/&#39;</span> <span class="o">+</span> <span class="nx">bn</span> <span class="o">+</span> <span class="nx">path</span><span class="p">;</span></div><div class='line' id='LC233'><span class="p">}</span></div><div class='line' id='LC234'><br/></div><div class='line' id='LC235'><span class="kd">function</span> <span class="nx">requestCallback</span><span class="p">(</span><span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC236'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">callback</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC237'>&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">response</span><span class="p">,</span> <span class="nx">body</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="k">return</span> <span class="nx">callback</span><span class="p">(</span><span class="nx">err</span><span class="p">);</span></div><div class='line' id='LC239'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">response</span><span class="p">.</span><span class="nx">statusCode</span> <span class="o">&gt;=</span> <span class="mi">400</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">err</span> <span class="o">=</span> <span class="nx">body</span><span class="p">.</span><span class="nx">meta</span> <span class="o">?</span> <span class="nx">body</span><span class="p">.</span><span class="nx">meta</span><span class="p">.</span><span class="nx">msg</span> <span class="o">:</span> <span class="nx">body</span><span class="p">.</span><span class="nx">error</span><span class="p">;</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">callback</span><span class="p">(</span><span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;API error: &#39;</span> <span class="o">+</span> <span class="nx">response</span><span class="p">.</span><span class="nx">statusCode</span> <span class="o">+</span> <span class="s1">&#39; &#39;</span> <span class="o">+</span> <span class="nx">err</span><span class="p">));</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">callback</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">body</span><span class="p">.</span><span class="nx">response</span><span class="p">);</span></div><div class='line' id='LC244'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC245'><span class="p">}</span></div><div class='line' id='LC246'><br/></div><div class='line' id='LC247'><span class="kd">function</span> <span class="nx">isFunction</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC248'>&nbsp;&nbsp;<span class="k">return</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;[object Function]&#39;</span><span class="p">;</span></div><div class='line' id='LC249'><span class="p">}</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.06553s from github-fe114-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/tumblr/tumblr.js/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

