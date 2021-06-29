let btn_nav = document.querySelector('.mynav'), //                  .             .
  open_nav = document.querySelector('.nav'),
  close_btn = document.querySelector('.close'),
  click_me = document.querySelector('.click_me'),
  msgt = document.querySelector('.msg_text');
let ayat = ['وَقَرْنَ فِي بُيُوتِكُنَّ وَلَا تَبَرَّجْنَ تَبَرُّجَ الْجَاهِلِيَّةِ الْأُولَىٰ ۖ وَأَقِمْنَ الصَّلَاةَ وَآتِينَ الزَّكَاةَ وَأَطِعْنَ اللَّهَ وَرَسُولَهُ ۚ إِنَّمَا يُرِيدُ اللَّهُ لِيُذْهِبَ عَنكُمُ الرِّجْسَ أَهْلَ الْبَيْتِ وَيُطَهِّرَكُمْ تَطْهِيرًا',
            '‏أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَا',
            '‏وَأُفَوِّضُ أَمْرِي إِلَى اللَّهِ ۚ إِنَّ اللَّهَ بَصِيرٌ بِالْعِبَادِ',
            ' إِنَّ الْحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ ۚ ذَٰلِكَ ذِكْرَىٰ لِلذَّاكِرِينَ ',
            '‏وَلا تُطِع مَن أَغفَلنا قَلبَهُ عَن ذِكرِنا وَاتَّبَعَ هَواهُ وَكانَ أَمرُهُ فُرُطًا',
            '‏وَاصْبِرُواْ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ',
            '‏وَمَن يُؤْمِن بِاللَّهِ يَهْدِ قَلْبَهُ',
            'وَلا تَتَّبِعِ الْهَوَى فَيُضِلَّكَ عَن سَبِيلِ اللَّه',
            '‏مَنْ كَانَ يَرْجُو لِقَاءَ اللَّهِ فَإِنَّ أَجَلَ اللَّهِ لَآتٍ ۚ وَهُوَ السَّمِيعُ الْعَلِيمُ',
            '‏وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَإِنَّ اللَّهَ عَزِيزٌ حَكِيمٌ',
            '‏وَأَطِيعُوا اللَّهَ وَرَسُولَهُ وَلَا تَنَازَعُوا فَتَفْشَلُوا وَتَذْهَبَ رِيحُكُمْ ۖۖ',
             'صلِّ على سيدنا محمد'];
let rund = Math.floor(Math.random() * 11);

btn_nav.onclick = function nav_open() {
  open_nav.style = ` width : 200px; height: 200px;
      border: 6px solid #0D78A4AB;`;
  btn_nav.style.display = 'none';
  close_btn.style.display = 'block';
}
close_btn.onclick = function close() {
  open_nav.style = ` width: 0;height :0; border: none;`;
  close_btn.style.display = 'none';
  btn_nav.style.display = 'block';
}
click_me.onclick = function msg() {
  open_nav.style = ` width: 0;height :0; border: none;`;
  close_btn.style.display = 'none';
  btn_nav.style.display = 'block';
  msgt.style.display = 'block';
  rund++;
  if (rund > 11) {
    rund = 0;
  }
  msgt.innerHTML = ayat[rund];
}
