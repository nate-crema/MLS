var waveform = require('waveform-util');

waveform.generate_peaks('/Users/kimgyun/Downloads/전미도-02-사랑하게 될 줄 알았어.mp3', 200, 31.05, 44100, 2,
    function (err, peaks_obj) {
        if (err) throw err;
        console.log(peaks_obj.peaks) // Array of peak values e.g. [0.75, 0.2, 0.1111,...]
        console.log(peaks_obj.max_peak) // Max peak in the signal: useful for scaling the peak values when drawing them
    }
);


