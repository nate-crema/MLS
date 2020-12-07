const generate_peaks = function (output_width, duration, sample_rate, channels) {
    let audioPath = "/Users/kimgyun/Downloads/전미도-02-사랑하게 될 줄 알았어.mp3";
    return new Promise((resolve, reject) => {
        var alt_log_meter, coefficient_to_db, current_max, log_10, log_meter, peak_index, peaks, sample_index, samples_per_peak, store_peak, total_max;
        if (arguments.length !== 6) reject(new Error("Invalid arguments supplied to generate_peaks. Should be    [audioPath, output_width, duration, sample_rate, channels, cb] but was    " + arguments));
        // audioPath = path.resolve(audioPath);
        audioPath = path.resolve(audioPath);
        if (!fs.existsSync(audioPath)) reject(new Error("Audio path must be to a valid audio file."));
        samples_per_peak = Math.round(duration * sample_rate / output_width) * channels;
        current_max = 0;
        total_max = 0;
        peaks = [];
        peak_index = 0;
        sample_index = 0;
        
        pcm.getPcmData(audioPath, {
          stereo: channels === 2,
          sample_rate
        }, function(sample, channel) {
          sample = Math.abs(sample);
          if (sample > current_max) {
            current_max = sample;
          }
          if (++sample_index >= samples_per_peak) {
            return store_peak();
          }
        }, function(err, output) {
          if (err) {
            return cb(err);
          }
          if (sample_index > 0 && peak_index < peaks.length) {
            store_peak();
          }
          return cb(null, {
            peaks: peaks,
            max_peak: total_max
          });
        });
        store_peak = function() {
          if (current_max > 0) {
            current_max = alt_log_meter(coefficient_to_db(current_max));
          } else {
            current_max = -alt_log_meter(coefficient_to_db(current_max));
          }
          peaks[peak_index++] = current_max;
          if (current_max > total_max) {
            total_max = current_max;
          }
          current_max = 0;
          return sample_index = 0;
        };
        log_10 = function(arg) {
          return Math.log(arg) / Math.LN10;
        };
        log_meter = function(power, lower_db, upper_db, non_linearity) {
          if (power < lower_db) {
            return 0;
          } else {
            return Math.pow((power - lower_db) / (upper_db - lower_db), non_linearity);
          }
        };
        alt_log_meter = function(power) {
          return log_meter(power, -192.0, 0.0, 8.0);
        };
        return coefficient_to_db = function(coeff) {
          return 20.0 * log_10(coeff);
        };
    })
  };