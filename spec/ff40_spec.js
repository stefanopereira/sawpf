Cookie.unset('__sawpf_');

describe('Firefox 4.0', function() {
  it('should show sawpf bar', function() {
    fakeUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0) Gecko/20100101 Firefox/4.0,gzip(gfe)');
    afterSawpfLoaded(function(){
        expect(document.getElementById('sawpf')).toExist();
    });
  });
});

