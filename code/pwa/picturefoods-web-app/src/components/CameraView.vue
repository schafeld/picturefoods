<template>
    <div class="camera-modal">
        <video ref="video" class="camera-stream"/>
        <div class="camera-modal-container">
            <span @click="capture" class="take-picture-button take-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
              <i class="material-icons">camera</i>
            </span>
        </div>
    </div>
</template>

<script>
  // import firebase from 'firebase'
  // import { storage } from '@/services/firebase'
  import * as firebase from 'firebase/app'
  import 'firebase/storage'
  import postImage from '../mixins/postImage'

  export default {
    mixins: [postImage],
    data () {
      return {
        mediaStream: null,
        'imageUrl': '',
        'title': 'Snapshot from Picturefoods web app'
      }
    },
    methods: {
      capture () {
        const mediaStreamTrack = this.mediaStream.getVideoTracks()[0]
        const imageCapture = new window.ImageCapture(mediaStreamTrack)
        /*
        // keep for debugging?
        return imageCapture.takePhoto().then(blob => {
          console.log(blob)
        })
        */
        return imageCapture.takePhoto().then(blob => {
          const user = firebase.auth().currentUser
          // storage.ref().child(`images/user/${user.uid}/picture-${new Date().getTime()}`).put(blob)
          firebase.storage().ref().child(`images/user/${user.uid}/picture-${new Date().getTime()}`).put(blob)
            .then(res => {
              console.table(res)
              console.log('Bucket: ' + res.ref.bucket + ', full path: ' + res.ref.fullPath)
              this.imageUrl = 'https://firebasestorage.googleapis.com/v0/b/picturefoods-firebase.appspot.com/o/images%2Fuser%2F' + user.uid + '%2F' + res.ref.name + '?alt=media'
              this.postImage(user.email)

              console.log('############## Picture taken by user: ' + user.email + ', id: ' + user.uid)

              // this.$router.go(-1)
              this.$router.push('gallery')
            })
        })
      },
      checkMediaDevices () {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
          console.log('enumerateDevices() not supported.')
          return
        }

        // List cameras and microphones.
        navigator.mediaDevices.enumerateDevices()
          .then(function (devices) {
            devices.forEach(function (device) {
              console.log(device.kind + ': ' + device.label +
                ' id = ' + device.deviceId)
            })
          })
          .catch(function (e) {
            console.log(e.name + ': ' + e.message)
          })
      }
    },
    mounted () {
      this.checkMediaDevices()

      const constraints = {
        advanced: [{
          facingMode: 'environment'
        }]
      }
      navigator.mediaDevices.getUserMedia({ video: constraints }) // video: true
        .then(mediaStream => {
          this.mediaStream = mediaStream
          this.$refs.video.srcObject = mediaStream
          this.$refs.video.play()
        })
        .catch(error => console.error('getUserMedia() error:', error))
    },
    destroyed () {
      const tracks = this.mediaStream.getTracks()
      tracks.map(track => track.stop())
    }
  }
</script>

<style scoped>
  .camera-modal {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: white;
    z-index: 10;
  }
  .camera-stream {
    width: 100%;
    max-height: 100%;
  }
  .camera-modal-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    align-items: center;
    margin-bottom: 24px;
  }
  .take-picture-button {
    display: flex;
  }
</style>