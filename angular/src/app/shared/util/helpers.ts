/**
 * To identify if the device is responsive or desktop view.
 * @return boolean;
 */
const isResponsive = (): boolean => {
  if (window.screen.width >= 1024) return false;
  return true;
}

/**
 * Identify device type. Size reference -> http://screensiz.es/
 * @return string;
 */
const identifyDevice = (): string => {
  if ((window.screen.width >= 768 && window.screen.width <= 5120) && (window.screen.height >= 768 && window.screen.height <= 4096)) {
    return 'desktop';
  } else if ((window.screen.width >= 600 && window.screen.width <= 2736) && (window.screen.height >= 600 && window.screen.height <= 2048)) {
    return 'tablet';
  } else if ((window.screen.width >= 320 && window.screen.width <= 2960) && (window.screen.height >= 360 && window.screen.height <= 2688)) {
    return 'mobile';
  }
}

/**
 * Encode URL parameter and query to handle i10n friendlyID
 * @return {string}
 */
const manualFormatHttpParams = (filters: any, endpoint: string, paramItems: string[] = []): string => {
  let url = endpoint;
  let count = 0;
  let queryParams = '';
  let params = '';
  for (const field in filters) {
    if(filters[field]) {
      let separator = count === 0 ? '?' : '&';
      queryParams = `${queryParams}${separator}${field}=${encodeURIComponent(filters[field])}`;
      count++;
    }
  }

  paramItems.forEach(param => {
    if (param) {
      params = `${params}/${encodeURIComponent(param)}`;
    }
  });

  return `${url}${params}${queryParams}`;
}

const storeCookie = (items: {key: any, value: any}[] = []): void => {
  items.forEach(data => {
    document.cookie = `${data.key}=;`;
    document.cookie = `${data.key}=${data.value}`;
  });
}

const getCookie = (items: string[] = []): any => {
  let cookies = {};
  items.forEach(key => {
    let cookieObj = {};
    let cookieValue = document.cookie.split('; ').find(row => row.startsWith(key));
    if (cookieValue) {
      let value = cookieValue.split('=')[1];
      cookieObj[key] = value;
      cookies = Object.assign(cookies, cookieObj);
    }
  });
  return cookies;
}

const deleteCookie = (items: string[] = []): void => {
  const cookies = [];
  items.forEach(key => {
    document.cookie = `${key}=;`;
  });
}

const stringToSlug = (str): string => {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  const to   = "aaaaeeeeiiiioooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
}

/**
 * Returns the average of two numbers.
 *
 * @param gaID - {string} Google Analytic ID
 * @param renderer - {Renderer2}  @angular/core
 * @param document - {DOCUMENT}  @angular/common
 * @returns void
 *
 */
const loadGoogleAnalytics = (gaID, renderer, document) => {
  var gTag = renderer.createElement('script');
  gTag.type = "text/javascript";
  gTag.async = true;
  gTag.defer = true;
  gTag.src = `https://www.googletagmanager.com/gtag/js?id=${gaID}`;
  renderer.appendChild(document.head, gTag);

  // Append gtag config
  var gTagConfig = renderer.createElement('script');
  gTagConfig.innerHTML = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${gaID}');`;
  renderer.appendChild(document.head, gTagConfig);
}

const capitalizeString = (string: string): string => {
  return string.replace(/(?!^[0-9])(^|[^a-zA-Z\u00C0-\u017F\u0400-\u04FF'])([a-zA-Z\u00C0-\u017F\u0400-\u04FF])/g, function (m) {
    return m.toUpperCase()
  });
}

const isMobile = (): boolean => {
  var ua = navigator.userAgent;
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
    return true;
  } else if(/Chrome/i.test(ua)) {
    return false;
  } else {
    return false;
  }
}

/**
 * Returns the average of two numbers.
 *
 * @param tagValue - {Object}
 * @param metaService - {Meta} @angular/platform-browser
 * @param isInitialLoad - {boolean} If true, load facebook app_id `fb:app_id`
 * @returns void
 */
const addFacebookOGTag = (tagValue: {title: string, url: string, appId?: string, description?: string, image?: string}, metaService: any, isInitialLoad: boolean = false): void => {
  metaService.updateTag({property: 'og:type', content: 'website'});
  metaService.updateTag({property: 'og:title', content: tagValue.title});
  metaService.updateTag({property: 'og:url', content: tagValue.url});

  if (tagValue.appId) {
    metaService.updateTag({property: 'og:appId', content: tagValue.appId});
  }

  if (tagValue.description) {
    metaService.updateTag({property: 'og:description', content: tagValue.description});
  }

  if (tagValue.image) {
    metaService.updateTag({property: 'og:image', content: tagValue.image});
  }
}

const trackByIndex = (index) => {
  return index;
}

const trackById = (index, item) => {
  return item._id;
}

export {
  isResponsive,
  identifyDevice,
  manualFormatHttpParams,
  storeCookie,
  getCookie,
  deleteCookie,
  stringToSlug,
  loadGoogleAnalytics,
  capitalizeString,
  isMobile,
  addFacebookOGTag,
  trackByIndex,
  trackById
};